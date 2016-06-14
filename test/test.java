import java.util.*;


class A
{

	public static void main(String arrs []){

		System.out.println('...........');

	}

	        /**
	 * rehash 子串 rehash(sub[i+1,i+m])= ((h-a*(2^m-1))*2+b) mod q
	 * a为sub[0],2^(m-1) 为a的系数,h为子串hash,b为sub[i+m].
	 *  	// 即i+1处的子串可以由i处的子串直接结算得出（i处的子串Hash-i处子串的首字母*R^(m-1) ，
         *       //结果再乘以进制R，最后加上i+1处字串尾字符）。
	 * @since: 1.0.0
	 * @param firstChar 子串首字符
	 * @param nextChar 子串下一个字符
	 * @param powerOfR 2^(plen-1)
	 * @param prime 素数
	 * @param currentSubHash 当前子串的hash值
	 * @return 返回下一个子串的hash值
	 */
	private static long rehash(char firstChar, char nextChar, int powerOfR, long prime,
			long currentSubHash) {
		// 类型提升 char转换为long 符号位扩展0,如果是其他类型，可以利用掩码防止符号位扩展,
                //另外因为 +号比<<优先级高，所以前半部分要括起来
		// ((currentSubHash - firstChar * powerOfN) << 1 )+ nextChar&0xFFFFL
		// return (((currentSubHash - firstChar * powerOfN) << 1 )+ nextChar )%prime;
 
		// 取余，Hash(i+1)即Hash(i)的下一个子串
		// Hash(i+1)% q = (Hash(i) - text[i]*R^(m-1) ) *R+ text[i+m] ) % P
		// = (Hash(i)*R - text[i]*R^m + text[i+m] ) % P
		// = (Hash(i)*R%P - text[i]*R^m%P +P + text[i+m] ) % P
		// 这里+P主要是为了防止hash溢出
		return ((currentSubHash << 1) % prime - ((firstChar * powerOfR) << 1) % prime + prime + nextChar)
				% prime;
 
	}
 
  
   private static void krSearch(String text, String pattern) {
		if (text == null || text.isEmpty() || pattern == null || pattern.isEmpty()) {
			return;
		}
		int tlen = text.length();
		int plen = pattern.length();
		int maxCount = tlen - plen;
		if (maxCount < 0) {
			// return -1;
			return;
		}
 
		// 2^(plen-1),max 2^31
		// 32bit，最多支持32个模式串，多了溢出，也可以使用long
		int powerOfR = 1 << (plen - 1);
 
 
		long hpattern, /* 模式串的hash* */
		hsub;/* 子串的hash* */
		hpattern = hsub = 0;
		// 64位
		long prime = 1099511628211L;
		// 32位
		// int prime=16777619;
		// 或者采用BigInteger动态计算
		// BigInteger prime = BigInteger.probablePrime(31, new Random());
		// return prime.longValue();
 
		// hash(str[0..m-1])=(str[0]*2^(m-1)+str[1]*2^(m-2)+……+str[m-1]*2^0)mod P
		
                // 取余的特性
		// (1) (a+b)%c = ((a%c)+(b%c))%c;
		// (2) (a*b)%c = ((a%c)*(b%c))%c;
		for (int shift = plen - 1, i = 0; i < plen; i++, shift--) {
			hpattern += (pattern.charAt(i) << shift) % prime;
			hsub += (text.charAt(i) << shift) % prime;
		}
 
		int i = 0;
		int nextCharIndex = 0;
		while (i <= maxCount) {
			if (hpattern == hsub) {
				// 如果子串和模式串的hash相同，开始逐字符精确比较
				int j = 0;
				while (j < plen && text.charAt(i + j) == pattern.charAt(j)) {
					j++;
				}
				if (j == plen) {
					System.out.println(text + "=================>found:" + pattern + ",i=" + i);
					return;
				}
			}
			// hash不同，下一个字串text[i+1,i+plen],检查是否超出字符串长度
			nextCharIndex = i + plen;
			if (nextCharIndex < tlen) {
				hsub = rehash(text.charAt(i), text.charAt(nextCharIndex), powerOfR, prime, hsub);
				i++;
			} else {
				break;
			}
		}
 
		// not found
		// return -1;
		System.out.println(text + "=================>not found:" + pattern);
	}
}