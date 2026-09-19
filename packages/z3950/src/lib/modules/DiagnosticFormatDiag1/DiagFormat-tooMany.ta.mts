/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DiagFormat_tooMany_tooManyWhat, _encode_DiagFormat_tooMany_tooManyWhat, DiagFormat_tooMany_tooManyWhat } from "../DiagnosticFormatDiag1/DiagFormat-tooMany-tooManyWhat.ta.mjs";
// export { DiagFormat_tooMany_tooManyWhat, DiagFormat_tooMany_tooManyWhat_argumentWords /* IMPORTED_LONG_NAMED_INTEGER */, argumentWords /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_truncatedWords /* IMPORTED_LONG_NAMED_INTEGER */, truncatedWords /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_booleanOperators /* IMPORTED_LONG_NAMED_INTEGER */, booleanOperators /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_incompleteSubfields /* IMPORTED_LONG_NAMED_INTEGER */, incompleteSubfields /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_characters /* IMPORTED_LONG_NAMED_INTEGER */, characters /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_recordsRetrieved /* IMPORTED_LONG_NAMED_INTEGER */, recordsRetrieved /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_dataBasesSpecified /* IMPORTED_LONG_NAMED_INTEGER */, dataBasesSpecified /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_resultSetsCreated /* IMPORTED_LONG_NAMED_INTEGER */, resultSetsCreated /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_tooMany_tooManyWhat_indexTermsProcessed /* IMPORTED_LONG_NAMED_INTEGER */, indexTermsProcessed /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_tooMany_tooManyWhat, _encode_DiagFormat_tooMany_tooManyWhat } from "../DiagnosticFormatDiag1/DiagFormat-tooMany-tooManyWhat.ta.mjs";


/**
 * @summary DiagFormat_tooMany
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-tooMany ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_tooMany {
    constructor (
        /**
         * @summary `tooManyWhat`.
         * @public
         * @readonly
         */
        readonly tooManyWhat: DiagFormat_tooMany_tooManyWhat,
        /**
         * @summary `max`.
         * @public
         * @readonly
         */
        readonly max: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_tooMany
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_tooMany`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_tooMany`.
     * @returns {DiagFormat_tooMany}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_tooMany)]: (DiagFormat_tooMany)[_K] }): DiagFormat_tooMany {
        return new DiagFormat_tooMany(_o.tooManyWhat, _o.max);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_tooMany
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_tooMany: $.ComponentSpec[] = [
    new $.ComponentSpec("tooManyWhat", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("max", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_tooMany
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_tooMany: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_tooMany
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_tooMany: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_tooMany: $.ASN1Decoder<DiagFormat_tooMany> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_tooMany
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_tooMany (el: _Element): DiagFormat_tooMany {
    if (!_cached_decoder_for_DiagFormat_tooMany) { _cached_decoder_for_DiagFormat_tooMany = function (el: _Element): DiagFormat_tooMany {
    let tooManyWhat!: DiagFormat_tooMany_tooManyWhat;
    let max: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "tooManyWhat": (_el: _Element): void => { tooManyWhat = $._decode_implicit<DiagFormat_tooMany_tooManyWhat>(() => _decode_DiagFormat_tooMany_tooManyWhat)(_el); },
        "max": (_el: _Element): void => { max = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_tooMany,
        _extension_additions_list_spec_for_DiagFormat_tooMany,
        _root_component_type_list_2_spec_for_DiagFormat_tooMany,
        undefined,
    );
    return new DiagFormat_tooMany(
        tooManyWhat,
        max
    );
}; }
    return _cached_decoder_for_DiagFormat_tooMany(el);
}

let _cached_encoder_for_DiagFormat_tooMany: $.ASN1Encoder<DiagFormat_tooMany> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_tooMany into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_tooMany, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_tooMany (value: DiagFormat_tooMany, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_tooMany) { _cached_encoder_for_DiagFormat_tooMany = function (value: DiagFormat_tooMany, elGetter: $.ASN1Encoder<DiagFormat_tooMany>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DiagFormat_tooMany_tooManyWhat, $.BER)(value.tooManyWhat, $.BER),
            /* IF_ABSENT  */ ((value.max === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.max, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_tooMany(value, elGetter);
}


/* eslint-enable */
