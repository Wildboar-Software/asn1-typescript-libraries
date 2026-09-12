/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
import { EntryContent_entryForm, _decode_EntryContent_entryForm, _encode_EntryContent_entryForm } from "../ISO-9506-MMS-1/EntryContent-entryForm.ta.mjs";
// export { EntryContent_entryForm, _decode_EntryContent_entryForm, _encode_EntryContent_entryForm } from "../ISO-9506-MMS-1/EntryContent-entryForm.ta.mjs";


/**
 * @summary EntryContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryContent ::= SEQUENCE {
 *    occurrenceTime         [0] IMPLICIT TimeOfDay,
 *    entryForm              CHOICE {
 *        data                   [2] IMPLICIT SEQUENCE {
 *           event                  [0] IMPLICIT SEQUENCE {
 *              eventConditionName     [0] ObjectName,
 *              currentState           [1] IMPLICIT EC-State  } OPTIONAL,
 *           listOfVariables        [1] IMPLICIT SEQUENCE OF Journal-Variable OPTIONAL
 *           },
 *        annotation             [3] MMSString    }
 *    }
 * ```
 * 
 * @class
 */
export
class EntryContent {
    constructor (
        /**
         * @summary `occurrenceTime`.
         * @public
         * @readonly
         */
        readonly occurrenceTime: TimeOfDay,
        /**
         * @summary `entryForm`.
         * @public
         * @readonly
         */
        readonly entryForm: EntryContent_entryForm
    ) {}

    /**
     * @summary Restructures an object into a EntryContent
     * @description
     * 
     * This takes an `object` and converts it to a `EntryContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryContent`.
     * @returns {EntryContent}
     */
    public static _from_object (_o: { [_K in keyof (EntryContent)]: (EntryContent)[_K] }): EntryContent {
        return new EntryContent(_o.occurrenceTime, _o.entryForm);
    }


}

/**
 * @summary The Leading Root Component Types of EntryContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryContent: $.ComponentSpec[] = [
    new $.ComponentSpec("occurrenceTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entryForm", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of EntryContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryContent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryContent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryContent: $.ASN1Decoder<EntryContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryContent (el: _Element): EntryContent {
    if (!_cached_decoder_for_EntryContent) { _cached_decoder_for_EntryContent = function (el: _Element): EntryContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EntryContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "occurrenceTime";
    sequence[1].name = "entryForm";
    let occurrenceTime!: TimeOfDay;
    let entryForm!: EntryContent_entryForm;
    occurrenceTime = $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay)(sequence[0]);
    entryForm = _decode_EntryContent_entryForm(sequence[1]);
    return new EntryContent(
        occurrenceTime,
        entryForm,

    );
}; }
    return _cached_decoder_for_EntryContent(el);
}

let _cached_encoder_for_EntryContent: $.ASN1Encoder<EntryContent> | null = null;

/**
 * @summary Encodes a(n) EntryContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryContent, encoded as an ASN.1 Element.
 */
export
function _encode_EntryContent (value: EntryContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryContent) { _cached_encoder_for_EntryContent = function (value: EntryContent, elGetter: $.ASN1Encoder<EntryContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOfDay, $.BER)(value.occurrenceTime, $.BER),
            /* REQUIRED   */ _encode_EntryContent_entryForm(value.entryForm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryContent(value, elGetter);
}


/* eslint-enable */
