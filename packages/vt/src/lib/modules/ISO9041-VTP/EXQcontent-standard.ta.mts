/* eslint-disable */
import {
    OPTIONAL,
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
import { _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
// export { ExplicitPointer, _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
import { _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";
// export { LogExpPointer, _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";


/**
 * @summary EXQcontent_standard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXQcontent-standard ::= SEQUENCE {
 *     pointer    [0] IMPLICIT G.ExplicitPointer OPTIONAL,
 *     logPointer [1] IMPLICIT G.LogExpPointer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EXQcontent_standard {
    constructor (
        /**
         * @summary `pointer`.
         * @public
         * @readonly
         */
        readonly pointer: OPTIONAL<G.ExplicitPointer>,
        /**
         * @summary `logPointer`.
         * @public
         * @readonly
         */
        readonly logPointer: OPTIONAL<G.LogExpPointer>
    ) {}

    /**
     * @summary Restructures an object into a EXQcontent_standard
     * @description
     * 
     * This takes an `object` and converts it to a `EXQcontent_standard`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EXQcontent_standard`.
     * @returns {EXQcontent_standard}
     */
    public static _from_object (_o: { [_K in keyof (EXQcontent_standard)]: (EXQcontent_standard)[_K] }): EXQcontent_standard {
        return new EXQcontent_standard(_o.pointer, _o.logPointer);
    }


}

/**
 * @summary The Leading Root Component Types of EXQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EXQcontent_standard: $.ComponentSpec[] = [
    new $.ComponentSpec("pointer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("logPointer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EXQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EXQcontent_standard: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EXQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EXQcontent_standard: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EXQcontent_standard: $.ASN1Decoder<EXQcontent_standard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EXQcontent_standard
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EXQcontent_standard (el: _Element): EXQcontent_standard {
    if (!_cached_decoder_for_EXQcontent_standard) { _cached_decoder_for_EXQcontent_standard = function (el: _Element): EXQcontent_standard {
    let pointer: OPTIONAL<G.ExplicitPointer>;
    let logPointer: OPTIONAL<G.LogExpPointer>;
    const callbacks: $.DecodingMap = {
        "pointer": (_el: _Element): void => { pointer = $._decode_implicit<G.ExplicitPointer>(() => G._decode_ExplicitPointer)(_el); },
        "logPointer": (_el: _Element): void => { logPointer = $._decode_implicit<G.LogExpPointer>(() => G._decode_LogExpPointer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EXQcontent_standard,
        _extension_additions_list_spec_for_EXQcontent_standard,
        _root_component_type_list_2_spec_for_EXQcontent_standard,
        undefined,
    );
    return new EXQcontent_standard(
        pointer,
        logPointer
    );
}; }
    return _cached_decoder_for_EXQcontent_standard(el);
}

let _cached_encoder_for_EXQcontent_standard: $.ASN1Encoder<EXQcontent_standard> | null = null;

/**
 * @summary Encodes a(n) EXQcontent_standard into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EXQcontent_standard, encoded as an ASN.1 Element.
 */
export
function _encode_EXQcontent_standard (value: EXQcontent_standard, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EXQcontent_standard) { _cached_encoder_for_EXQcontent_standard = function (value: EXQcontent_standard): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => G._encode_ExplicitPointer, $.BER)(value.pointer, $.BER)),
            /* IF_ABSENT  */ ((value.logPointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => G._encode_LogExpPointer, $.BER)(value.logPointer, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EXQcontent_standard(value, elGetter);
}


/* eslint-enable */
