/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary CorrelationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationInfo ::= SEQUENCE {
 *     -- Client may supply one or both for any record:
 *     note      [1] IMPLICIT InternationalString OPTIONAL,
 *     id        [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CorrelationInfo {
    /**
     * @summary `note`.
     * @public
     * @readonly
     */
    readonly note: OPTIONAL<InternationalString>;
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: OPTIONAL<INTEGER>;

    constructor (
        note: OPTIONAL<InternationalString>,
        id: OPTIONAL<INTEGER>
    ) {
        this.note = note;
        this.id = id;
    }

    /**
     * @summary Restructures an object into a CorrelationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CorrelationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorrelationInfo`.
     * @returns {CorrelationInfo}
     */
    public static _from_object (_o: { [_K in keyof (CorrelationInfo)]: (CorrelationInfo)[_K] }): CorrelationInfo {
        return new CorrelationInfo(_o.note, _o.id);
    }


}

/**
 * @summary The Leading Root Component Types of CorrelationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorrelationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("note", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("id", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CorrelationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorrelationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorrelationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorrelationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorrelationInfo: $.ASN1Decoder<CorrelationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelationInfo (el: _Element): CorrelationInfo {
    if (!_cached_decoder_for_CorrelationInfo) { _cached_decoder_for_CorrelationInfo = function (el: _Element): CorrelationInfo {
    let note: OPTIONAL<InternationalString>;
    let id: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "note": (_el: _Element): void => { note = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "id": (_el: _Element): void => { id = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CorrelationInfo,
        _extension_additions_list_spec_for_CorrelationInfo,
        _root_component_type_list_2_spec_for_CorrelationInfo,
        undefined,
    );
    return new CorrelationInfo(
        note,
        id
    );
}; }
    return _cached_decoder_for_CorrelationInfo(el);
}

let _cached_encoder_for_CorrelationInfo: $.ASN1Encoder<CorrelationInfo> | null = null;

/**
 * @summary Encodes a(n) CorrelationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelationInfo (value: CorrelationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelationInfo) { _cached_encoder_for_CorrelationInfo = function (value: CorrelationInfo, elGetter: $.ASN1Encoder<CorrelationInfo>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.note !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.note, $.BER);
    }
    if (value.id !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.id, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CorrelationInfo(value, elGetter);
}


/* eslint-enable */
