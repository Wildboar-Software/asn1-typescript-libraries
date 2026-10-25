/* eslint-disable */
import {
    type RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CCPDU, _decode_CCPDU, _encode_CCPDU } from "../TS33128Payloads/CCPDU.ta.mjs";
// export { CCPDU, _decode_CCPDU, _encode_CCPDU } from "../TS33128Payloads/CCPDU.ta.mjs";


/**
 * @summary CCPayload
 * @description
 * 
 * - NOTE: ETSI TS 102 232-1 [9] specifies in clause 6.4 a transport layer based
 *   on TCP. However, based on agreement between network operator and LEA, in
 *   scenarios where it may not be possible to achieve the necessary LI data
 *   rates based on the transport layer based on single TCP connection,
 *   alternative profiles may be considered (e.g. based on UDP, multi path TCP
 *   or other protocols). Any alternative profile needs to ensure that LI
 *   reliability, security and completeness requirements as specified in TS
 *   33.126 [3] are met.
 *
 * 3GPP TS 33.128, clause 5.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCPayload ::= SEQUENCE
 * {
 *     cCPayloadOID         [1] RELATIVE-OID,
 *     pDU                  [2] CCPDU
 * }
 * ```
 * 
 * @class
 */
export
class CCPayload {
    /**
     * @summary `cCPayloadOID`.
     * @description
     *
     * Shall be populated with the value of the cCPayloadOID specified in the
     * version of the ASN.1 used by the MDF3 to generate the CC record.
     *
     * 3GPP TS 33.128, clause 5.5.3.
     *
     * @public
     * @readonly
     */
    readonly cCPayloadOID: RELATIVE_OID;
    /**
     * @summary `pDU`.
     * @description
     *
     * Shall be populated as described in the relevant clause of the present
     * document.
     *
     * 3GPP TS 33.128, clause 5.5.3.
     *
     * @public
     * @readonly
     */
    readonly pDU: CCPDU;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCPayloadOID: RELATIVE_OID,
        pDU: CCPDU,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cCPayloadOID = cCPayloadOID;
        this.pDU = pDU;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCPayload
     * @description
     * 
     * This takes an `object` and converts it to a `CCPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCPayload`.
     * @returns {CCPayload}
     */
    public static _from_object (_o: { [_K in keyof (CCPayload)]: (CCPayload)[_K] }): CCPayload {
        return new CCPayload(_o.cCPayloadOID, _o.pDU, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("cCPayloadOID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pDU", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCPayload: $.ASN1Decoder<CCPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCPayload (el: _Element): CCPayload {
    if (!_cached_decoder_for_CCPayload) { _cached_decoder_for_CCPayload = function (el: _Element): CCPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CCPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cCPayloadOID";
    sequence[1].name = "pDU";
    let cCPayloadOID!: RELATIVE_OID;
    let pDU!: CCPDU;
    cCPayloadOID = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    pDU = $._decode_explicit<CCPDU>(() => _decode_CCPDU)(sequence[1]);
    return new CCPayload(
        cCPayloadOID,
        pDU,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CCPayload(el);
}

let _cached_encoder_for_CCPayload: $.ASN1Encoder<CCPayload> | null = null;

/**
 * @summary Encodes a(n) CCPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCPayload, encoded as an ASN.1 Element.
 */
export
function _encode_CCPayload (value: CCPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCPayload) { _cached_encoder_for_CCPayload = function (value: CCPayload, elGetter: $.ASN1Encoder<CCPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.cCPayloadOID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_CCPDU, $.BER)(value.pDU, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCPayload(value, elGetter);
}


/* eslint-enable */
