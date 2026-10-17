/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UPFCCPDUPayload, _decode_UPFCCPDUPayload, _encode_UPFCCPDUPayload } from "../TS33128Payloads/UPFCCPDUPayload.ta.mjs";
// export { UPFCCPDUPayload, _decode_UPFCCPDUPayload, _encode_UPFCCPDUPayload } from "../TS33128Payloads/UPFCCPDUPayload.ta.mjs";
import { QFI, _decode_QFI, _encode_QFI } from "../TS33128Payloads/QFI.ta.mjs";
// export { QFI, _decode_QFI, _encode_QFI } from "../TS33128Payloads/QFI.ta.mjs";


/**
 * @summary ExtendedUPFCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedUPFCCPDU ::= SEQUENCE
 * {
 *     payload [1] UPFCCPDUPayload,
 *     qFI     [2] QFI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedUPFCCPDU {
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: UPFCCPDUPayload;
    /**
     * @summary `qFI`.
     * @public
     * @readonly
     */
    readonly qFI: OPTIONAL<QFI>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        payload: UPFCCPDUPayload,
        qFI: OPTIONAL<QFI>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.payload = payload;
        this.qFI = qFI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ExtendedUPFCCPDU
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedUPFCCPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedUPFCCPDU`.
     * @returns {ExtendedUPFCCPDU}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedUPFCCPDU)]: (ExtendedUPFCCPDU)[_K] }): ExtendedUPFCCPDU {
        return new ExtendedUPFCCPDU(_o.payload, _o.qFI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedUPFCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedUPFCCPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qFI", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExtendedUPFCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedUPFCCPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedUPFCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedUPFCCPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedUPFCCPDU: $.ASN1Decoder<ExtendedUPFCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedUPFCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedUPFCCPDU (el: _Element): ExtendedUPFCCPDU {
    if (!_cached_decoder_for_ExtendedUPFCCPDU) { _cached_decoder_for_ExtendedUPFCCPDU = function (el: _Element): ExtendedUPFCCPDU {
    let payload!: UPFCCPDUPayload;
    let qFI: OPTIONAL<QFI>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payload": (_el: _Element): void => { payload = $._decode_explicit<UPFCCPDUPayload>(() => _decode_UPFCCPDUPayload)(_el); },
        "qFI": (_el: _Element): void => { qFI = $._decode_implicit<QFI>(() => _decode_QFI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedUPFCCPDU,
        _extension_additions_list_spec_for_ExtendedUPFCCPDU,
        _root_component_type_list_2_spec_for_ExtendedUPFCCPDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtendedUPFCCPDU(
        payload,
        qFI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExtendedUPFCCPDU(el);
}

let _cached_encoder_for_ExtendedUPFCCPDU: $.ASN1Encoder<ExtendedUPFCCPDU> | null = null;

/**
 * @summary Encodes a(n) ExtendedUPFCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedUPFCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedUPFCCPDU (value: ExtendedUPFCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedUPFCCPDU) { _cached_encoder_for_ExtendedUPFCCPDU = function (value: ExtendedUPFCCPDU, elGetter: $.ASN1Encoder<ExtendedUPFCCPDU>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_UPFCCPDUPayload, $.BER)(value.payload, $.BER);
    if (value.qFI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_QFI, $.BER)(value.qFI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedUPFCCPDU(value, elGetter);
}


/* eslint-enable */
