/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterOffers_access
 * @description
 *
 * Offered DO-access bits. Bit = 1 is offered. Only `wavar`(0),
 * `waci`(1), `waca`(2). The selected value is a single rule; a
 * display object cannot have a combined access-rule. ISO/IEC
 * 9040:1997 §8, §9; ISO/IEC 9041-1:1997 §12.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-access ::= BIT STRING { wavar (0), waci (1), waca (2) }
 * ```
 */
export
type ParameterOffers_access = BIT_STRING;

/**
 * @summary ParameterOffers_access_wavar
 * @description
 *
 * WAVAR: current owner of the WAVAR token. S-mode single DO is
 * always WAVAR; A-mode has no WAVAR. ISO/IEC 9040:1997 §8, §9.
 * @constant
 */
export
const ParameterOffers_access_wavar: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary wavar
 * @description
 *
 * WAVAR: current owner of the WAVAR token. S-mode single DO is
 * always WAVAR; A-mode has no WAVAR. ISO/IEC 9040:1997 §8, §9.
 * @constant
 */
export
const wavar: number = ParameterOffers_access_wavar; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_access_waci
 * @description
 *
 * WACI: initiator of the VT-association. A-mode initiator DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 */
export
const ParameterOffers_access_waci: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary waci
 * @description
 *
 * WACI: initiator of the VT-association. A-mode initiator DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 */
export
const waci: number = ParameterOffers_access_waci; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_access_waca
 * @description
 *
 * WACA: acceptor of the VT-association. A-mode acceptor DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 */
export
const ParameterOffers_access_waca: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary waca
 * @description
 *
 * WACA: acceptor of the VT-association. A-mode acceptor DO uses
 * this. ISO/IEC 9040:1997 §8, §9.
 * @constant
 */
export
const waca: number = ParameterOffers_access_waca; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_access = $._decodeBitString;
export const _encode_ParameterOffers_access = $._encodeBitString;


/* eslint-enable */
