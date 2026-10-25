/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMSCCPDUPayload, _decode_IMSCCPDUPayload, _encode_IMSCCPDUPayload } from "../TS33128Payloads/IMSCCPDUPayload.ta.mjs";
// export { IMSCCPDUPayload, _decode_IMSCCPDUPayload, _encode_IMSCCPDUPayload } from "../TS33128Payloads/IMSCCPDUPayload.ta.mjs";


/**
 * @summary IMSCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCPDU ::= SEQUENCE
 * {
 *     payload [1] IMSCCPDUPayload,
 *     sDPInfo [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSCCPDU {
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: IMSCCPDUPayload;
    /**
     * @summary `sDPInfo`.
     * @public
     * @readonly
     */
    readonly sDPInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        payload: IMSCCPDUPayload,
        sDPInfo?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.payload = payload;
        this.sDPInfo = sDPInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSCCPDU
     * @description
     * 
     * This takes an `object` and converts it to a `IMSCCPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSCCPDU`.
     * @returns {IMSCCPDU}
     */
    public static _from_object (_o: { [_K in keyof (IMSCCPDU)]: (IMSCCPDU)[_K] }): IMSCCPDU {
        return new IMSCCPDU(_o.payload, _o.sDPInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSCCPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDPInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSCCPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSCCPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSCCPDU: $.ASN1Decoder<IMSCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSCCPDU (el: _Element): IMSCCPDU {
    if (!_cached_decoder_for_IMSCCPDU) { _cached_decoder_for_IMSCCPDU = function (el: _Element): IMSCCPDU {
    let payload!: IMSCCPDUPayload;
    let sDPInfo: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payload": (_el: _Element): void => { payload = $._decode_implicit<IMSCCPDUPayload>(() => _decode_IMSCCPDUPayload)(_el); },
        "sDPInfo": (_el: _Element): void => { sDPInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSCCPDU,
        _extension_additions_list_spec_for_IMSCCPDU,
        _root_component_type_list_2_spec_for_IMSCCPDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSCCPDU(
        payload,
        sDPInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSCCPDU(el);
}

let _cached_encoder_for_IMSCCPDU: $.ASN1Encoder<IMSCCPDU> | null = null;

/**
 * @summary Encodes a(n) IMSCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_IMSCCPDU (value: IMSCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSCCPDU) { _cached_encoder_for_IMSCCPDU = function (value: IMSCCPDU, elGetter: $.ASN1Encoder<IMSCCPDU>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSCCPDUPayload, $.BER)(value.payload, $.BER);
    if (value.sDPInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sDPInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSCCPDU(value, elGetter);
}


/* eslint-enable */
