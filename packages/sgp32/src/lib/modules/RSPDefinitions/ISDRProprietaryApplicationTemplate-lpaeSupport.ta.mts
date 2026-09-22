/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplate-lpaeSupport ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ISDRProprietaryApplicationTemplate_lpaeSupport = BIT_STRING;

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingCat
 * @constant
 */
export
const lpaeUsingCat: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingCat; /* SHORT_NAMED_BIT */

/**
 * @summary ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws
 * @constant
 */
export
const ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary lpaeUsingScws
 * @constant
 */
export
const lpaeUsingScws: number = ISDRProprietaryApplicationTemplate_lpaeSupport_lpaeUsingScws; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport: $.ASN1Decoder<ISDRProprietaryApplicationTemplate_lpaeSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDRProprietaryApplicationTemplate_lpaeSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDRProprietaryApplicationTemplate_lpaeSupport (el: _Element): ISDRProprietaryApplicationTemplate_lpaeSupport {
    if (!_cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport) { _cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport = $._decodeBitString; }
    return _cached_decoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport(el);
}

let _cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport: $.ASN1Encoder<ISDRProprietaryApplicationTemplate_lpaeSupport> | null = null;

/**
 * @summary Encodes a(n) ISDRProprietaryApplicationTemplate_lpaeSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDRProprietaryApplicationTemplate_lpaeSupport, encoded as an ASN.1 Element.
 */
export
function _encode_ISDRProprietaryApplicationTemplate_lpaeSupport (value: ISDRProprietaryApplicationTemplate_lpaeSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport) { _cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport = $._encodeBitString; }
    return _cached_encoder_for_ISDRProprietaryApplicationTemplate_lpaeSupport(value, elGetter);
}


/* eslint-enable */
