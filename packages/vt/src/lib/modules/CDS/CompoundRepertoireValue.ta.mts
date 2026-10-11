/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { RepertoireFontValue, _decode_RepertoireFontValue, _encode_RepertoireFontValue } from "../CDS/RepertoireFontValue.ta.mjs";


/**
 * @summary CompoundRepertoireValue
 * @description
 *
 * Selected repertoire-capability and assignment list. INTEGER
 * attribute values in DO updates are 1-based indexes into this
 * list. ISO/IEC 9040:1997 §18.2.4; ISO/IEC 9041-1:1997 §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundRepertoireValue ::= SEQUENCE {
 *     repertoireCapability    [0] IMPLICIT INTEGER OPTIONAL,
 *     repertoireFontValues    [1] IMPLICIT SEQUENCE OF RepertoireFontValue OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompoundRepertoireValue {
    constructor (
        /**
         * @summary `repertoireCapability`.
         * @description
         * Selected `repertoire-capability` (1..N; default 1). ISO/IEC
         * 9040:1997 §18.1.
         * @public
         * @readonly
         */
        readonly repertoireCapability: OPTIONAL<INTEGER>,
        /**
         * @summary `repertoireFontValues`.
         * @description
         * Selected per-slot repertoire and font assignments.
         * ISO/IEC 9040:1997 §18.2.4, §18.3.
         * @public
         * @readonly
         */
        readonly repertoireFontValues: OPTIONAL<RepertoireFontValue[]>
    ) {}

    /**
     * @summary Restructures an object into a CompoundRepertoireValue
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundRepertoireValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundRepertoireValue`.
     * @returns {CompoundRepertoireValue}
     */
    public static _from_object (_o: { [_K in keyof (CompoundRepertoireValue)]: (CompoundRepertoireValue)[_K] }): CompoundRepertoireValue {
        return new CompoundRepertoireValue(_o.repertoireCapability, _o.repertoireFontValues);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundRepertoireValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundRepertoireValue: $.ComponentSpec[] = [
    new $.ComponentSpec("repertoireCapability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("repertoireFontValues", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CompoundRepertoireValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundRepertoireValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundRepertoireValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundRepertoireValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundRepertoireValue: $.ASN1Decoder<CompoundRepertoireValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundRepertoireValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundRepertoireValue (el: _Element): CompoundRepertoireValue {
    if (!_cached_decoder_for_CompoundRepertoireValue) { _cached_decoder_for_CompoundRepertoireValue = function (el: _Element): CompoundRepertoireValue {
    let repertoireCapability: OPTIONAL<INTEGER>;
    let repertoireFontValues: OPTIONAL<RepertoireFontValue[]>;
    const callbacks: $.DecodingMap = {
        "repertoireCapability": (_el: _Element): void => { repertoireCapability = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "repertoireFontValues": (_el: _Element): void => { repertoireFontValues = $._decode_implicit<RepertoireFontValue[]>(() => $._decodeSequenceOf<RepertoireFontValue>(() => _decode_RepertoireFontValue))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundRepertoireValue,
        _extension_additions_list_spec_for_CompoundRepertoireValue,
        _root_component_type_list_2_spec_for_CompoundRepertoireValue,
        undefined,
    );
    return new CompoundRepertoireValue(
        repertoireCapability,
        repertoireFontValues
    );
}; }
    return _cached_decoder_for_CompoundRepertoireValue(el);
}

let _cached_encoder_for_CompoundRepertoireValue: $.ASN1Encoder<CompoundRepertoireValue> | null = null;

/**
 * @summary Encodes a(n) CompoundRepertoireValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundRepertoireValue, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundRepertoireValue (value: CompoundRepertoireValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundRepertoireValue) { _cached_encoder_for_CompoundRepertoireValue = function (value: CompoundRepertoireValue): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.repertoireCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.repertoireCapability, $.BER)),
            /* IF_ABSENT  */ ((value.repertoireFontValues === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RepertoireFontValue>(() => _encode_RepertoireFontValue, $.BER), $.BER)(value.repertoireFontValues, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompoundRepertoireValue(value, elGetter);
}


/* eslint-enable */
