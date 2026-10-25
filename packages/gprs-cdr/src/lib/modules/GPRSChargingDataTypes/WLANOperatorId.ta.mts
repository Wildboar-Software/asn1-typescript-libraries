/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WLANOperatorId
 * @description
 * 
 * Operator of the WLAN access point included in UWAN or TWAN user
 * location. TS 32.251 describes that location as SSID and, when available,
 * BSSID, plus the local IP address and optional source port (table
 * 6.1.3.1). It does not define this operator-id component separately.
 * 
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLANOperatorId ::= SEQUENCE {
 *    wLANOperatorName   [0] IMPLICIT OCTET STRING,
 *    wLANPLMNId         [1] IMPLICIT OCTET STRING ( SIZE( 3 ) )}
 * ```
 * 
 * @class
 */
export
class WLANOperatorId {
    /**
     * @summary `wLANOperatorName`.
     * @public
     * @readonly
     */
    readonly wLANOperatorName: OCTET_STRING;
    /**
     * @summary `wLANPLMNId`.
     * @public
     * @readonly
     */
    readonly wLANPLMNId: OCTET_STRING;

    constructor (
        wLANOperatorName: OCTET_STRING,
        wLANPLMNId: OCTET_STRING
    ) {
        this.wLANOperatorName = wLANOperatorName;
        this.wLANPLMNId = wLANPLMNId;
    
        if ((this.wLANPLMNId.length !== 3)) {
            throw new ASN1SizeError("WLANOperatorId.wLANPLMNId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a WLANOperatorId
     * @description
     * 
     * This takes an `object` and converts it to a `WLANOperatorId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WLANOperatorId`.
     * @returns {WLANOperatorId}
     */
    public static _from_object (_o: { [_K in keyof (WLANOperatorId)]: (WLANOperatorId)[_K] }): WLANOperatorId {
        return new WLANOperatorId(_o.wLANOperatorName, _o.wLANPLMNId);
    }


}

/**
 * @summary The Leading Root Component Types of WLANOperatorId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WLANOperatorId: $.ComponentSpec[] = [
    new $.ComponentSpec("wLANOperatorName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("wLANPLMNId", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of WLANOperatorId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WLANOperatorId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WLANOperatorId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WLANOperatorId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WLANOperatorId: $.ASN1Decoder<WLANOperatorId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WLANOperatorId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WLANOperatorId (el: _Element): WLANOperatorId {
    if (!_cached_decoder_for_WLANOperatorId) { _cached_decoder_for_WLANOperatorId = function (el: _Element): WLANOperatorId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("WLANOperatorId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "wLANOperatorName";
    sequence[1].name = "wLANPLMNId";
    const wLANOperatorName: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const wLANPLMNId: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new WLANOperatorId(
        wLANOperatorName,
        wLANPLMNId,

    );
}; }
    return _cached_decoder_for_WLANOperatorId(el);
}

let _cached_encoder_for_WLANOperatorId: $.ASN1Encoder<WLANOperatorId> | null = null;

/**
 * @summary Encodes a(n) WLANOperatorId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WLANOperatorId, encoded as an ASN.1 Element.
 */
export
function _encode_WLANOperatorId (value: WLANOperatorId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WLANOperatorId) { _cached_encoder_for_WLANOperatorId = function (value: WLANOperatorId, _elGetter: $.ASN1Encoder<WLANOperatorId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.wLANOperatorName, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.wLANPLMNId, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_WLANOperatorId(value, elGetter);
}


/* eslint-enable */
