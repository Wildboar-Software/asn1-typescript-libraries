/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary PKIHeader_pvno
 * @description
 *
 * CMP protocol version number in `PKIHeader.pvno`
 * ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)). `cmp2000`(2) is required for this specification;
 * `cmp1999`(1) is the RFC 2510 version (see §7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIHeader-pvno ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKIHeader_pvno = INTEGER;


/**
 * @summary PKIHeader_pvno_cmp1999
 * @description
 *
 * `cmp1999`(1): CMP as in
 * [RFC 2510](https://datatracker.ietf.org/doc/html/rfc2510)
 * ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1), §7).
 *
 * @constant
 * @type {number}
 */
export const PKIHeader_pvno_cmp1999: PKIHeader_pvno = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIHeader_pvno_cmp1999
 * @description
 *
 * `cmp1999`(1): CMP as in
 * [RFC 2510](https://datatracker.ietf.org/doc/html/rfc2510)
 * ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1), §7).
 *
 * @constant
 * @type {number}
 */
export const cmp1999: PKIHeader_pvno = PKIHeader_pvno_cmp1999; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIHeader_pvno_cmp2000
 * @description
 *
 * `cmp2000`(2): this version of CMP ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
 *
 * @constant
 * @type {number}
 */
export const PKIHeader_pvno_cmp2000: PKIHeader_pvno = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIHeader_pvno_cmp2000
 * @description
 *
 * `cmp2000`(2): this version of CMP ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
 *
 * @constant
 * @type {number}
 */
export const cmp2000: PKIHeader_pvno = PKIHeader_pvno_cmp2000; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PKIHeader_pvno = $._decodeInteger;




export const _encode_PKIHeader_pvno = $._encodeInteger;


/* eslint-enable */
