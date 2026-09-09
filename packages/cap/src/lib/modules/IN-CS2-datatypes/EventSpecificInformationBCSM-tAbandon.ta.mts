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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_tAbandon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-tAbandon ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_tAbandon {
    constructor (
        /**
         * @summary `abandonCause`.
         * @public
         * @readonly
         */
        readonly abandonCause: OPTIONAL<Cause>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_tAbandon
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_tAbandon`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_tAbandon`.
     * @returns {EventSpecificInformationBCSM_tAbandon}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tAbandon)]: (EventSpecificInformationBCSM_tAbandon)[_K] }): EventSpecificInformationBCSM_tAbandon {
        return new EventSpecificInformationBCSM_tAbandon(_o.abandonCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_tAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tAbandon: $.ComponentSpec[] = [
    new $.ComponentSpec("abandonCause", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_tAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tAbandon: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_tAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tAbandon: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_tAbandon: $.ASN1Decoder<EventSpecificInformationBCSM_tAbandon> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_tAbandon
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_tAbandon (el: _Element): EventSpecificInformationBCSM_tAbandon {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tAbandon) { _cached_decoder_for_EventSpecificInformationBCSM_tAbandon = function (el: _Element): EventSpecificInformationBCSM_tAbandon {
    let abandonCause: OPTIONAL<Cause>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "abandonCause": (_el: _Element): void => { abandonCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tAbandon,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tAbandon,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tAbandon,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tAbandon(
        abandonCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_tAbandon(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tAbandon: $.ASN1Encoder<EventSpecificInformationBCSM_tAbandon> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_tAbandon into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_tAbandon, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_tAbandon (value: EventSpecificInformationBCSM_tAbandon, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tAbandon) { _cached_encoder_for_EventSpecificInformationBCSM_tAbandon = function (value: EventSpecificInformationBCSM_tAbandon, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tAbandon>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.abandonCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.abandonCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_tAbandon(value, elGetter);
}


/* eslint-enable */
