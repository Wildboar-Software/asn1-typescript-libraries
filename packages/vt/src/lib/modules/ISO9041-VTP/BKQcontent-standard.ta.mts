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
import { _decode_ExplicitPointer, _encode_ExplicitPointer, ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
// export { ExplicitPointer, _decode_ExplicitPointer, _encode_ExplicitPointer } from "../G/ExplicitPointer.ta.mjs";
import { _decode_LogExpPointer, _encode_LogExpPointer, LogExpPointer } from "../G/LogExpPointer.ta.mjs";
// export { LogExpPointer, _decode_LogExpPointer, _encode_LogExpPointer } from "../G/LogExpPointer.ta.mjs";


/**
 * @summary BKQcontent_standard
 * @description
 *
 * Standard VT-information after a break: display and logical
 * pointers. ISO/IEC 9040:1997 §34.1.3.2. ISO/IEC 9041-1:1997
 * §6.5, §6.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BKQcontent-standard ::= SEQUENCE {
 *     pointer    [0] IMPLICIT G.ExplicitPointer OPTIONAL,
 *     logPointer [1] IMPLICIT G.LogExpPointer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BKQcontent_standard {
    constructor (
        /**
         * @summary `pointer`.
         * @description
         * Display pointer. ISO/IEC 9040:1997 §34.1.3.2.
         * @public
         * @readonly
         */
        readonly pointer: OPTIONAL<ExplicitPointer>,
        /**
         * @summary `logPointer`.
         * @description
         * Logical pointer. ISO/IEC 9040:1997 §34.1.3.2.
         * @public
         * @readonly
         */
        readonly logPointer: OPTIONAL<LogExpPointer>
    ) {}

    /**
     * @summary Restructures an object into a BKQcontent_standard
     * @description
     * 
     * This takes an `object` and converts it to a `BKQcontent_standard`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BKQcontent_standard`.
     * @returns {BKQcontent_standard}
     */
    public static _from_object (_o: { [_K in keyof (BKQcontent_standard)]: (BKQcontent_standard)[_K] }): BKQcontent_standard {
        return new BKQcontent_standard(_o.pointer, _o.logPointer);
    }


}

/**
 * @summary The Leading Root Component Types of BKQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BKQcontent_standard: $.ComponentSpec[] = [
    new $.ComponentSpec("pointer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("logPointer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BKQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BKQcontent_standard: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BKQcontent_standard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BKQcontent_standard: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BKQcontent_standard: $.ASN1Decoder<BKQcontent_standard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BKQcontent_standard
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BKQcontent_standard (el: _Element): BKQcontent_standard {
    if (!_cached_decoder_for_BKQcontent_standard) { _cached_decoder_for_BKQcontent_standard = function (el: _Element): BKQcontent_standard {
    let pointer: OPTIONAL<ExplicitPointer>;
    let logPointer: OPTIONAL<LogExpPointer>;
    const callbacks: $.DecodingMap = {
        "pointer": (_el: _Element): void => { pointer = $._decode_implicit<ExplicitPointer>(() => _decode_ExplicitPointer)(_el); },
        "logPointer": (_el: _Element): void => { logPointer = $._decode_implicit<LogExpPointer>(() => _decode_LogExpPointer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BKQcontent_standard,
        _extension_additions_list_spec_for_BKQcontent_standard,
        _root_component_type_list_2_spec_for_BKQcontent_standard,
        undefined,
    );
    return new BKQcontent_standard(
        pointer,
        logPointer
    );
}; }
    return _cached_decoder_for_BKQcontent_standard(el);
}

let _cached_encoder_for_BKQcontent_standard: $.ASN1Encoder<BKQcontent_standard> | null = null;

/**
 * @summary Encodes a(n) BKQcontent_standard into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BKQcontent_standard, encoded as an ASN.1 Element.
 */
export
function _encode_BKQcontent_standard (value: BKQcontent_standard, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BKQcontent_standard) { _cached_encoder_for_BKQcontent_standard = function (value: BKQcontent_standard): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExplicitPointer, $.BER)(value.pointer, $.BER)),
            /* IF_ABSENT  */ ((value.logPointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LogExpPointer, $.BER)(value.logPointer, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BKQcontent_standard(value, elGetter);
}


/* eslint-enable */
