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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AP_title,
    _decode_AP_title,
    _encode_AP_title,
} from "@wildboar/acse/src/lib/modules/ACSE-1/AP-title.ta";
import {
    AE_qualifier,
    _decode_AE_qualifier,
    _encode_AE_qualifier,
} from "@wildboar/acse/src/lib/modules/ACSE-1/AE-qualifier.ta";

/* START_OF_SYMBOL_DEFINITION Application_Entity_Title */
/**
 * @summary Application_Entity_Title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Application-Entity-Title ::= SEQUENCE {
 *   ap-title      AP-title,
 *   ae-qualifier  AE-qualifier
 * }
 * ```
 *
 * @class
 */
export class Application_Entity_Title {
    constructor(
        /**
         * @summary `ap_title`.
         * @public
         * @readonly
         */
        readonly ap_title: AP_title,
        /**
         * @summary `ae_qualifier`.
         * @public
         * @readonly
         */
        readonly ae_qualifier: AE_qualifier
    ) {}

    /**
     * @summary Restructures an object into a Application_Entity_Title
     * @description
     *
     * This takes an `object` and converts it to a `Application_Entity_Title`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Application_Entity_Title`.
     * @returns {Application_Entity_Title}
     */
    public static _from_object(
        _o: {
            [_K in keyof Application_Entity_Title]: Application_Entity_Title[_K];
        }
    ): Application_Entity_Title {
        return new Application_Entity_Title(_o.ap_title, _o.ae_qualifier);
    }
}
/* END_OF_SYMBOL_DEFINITION Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Application_Entity_Title */
/**
 * @summary The Leading Root Component Types of Application_Entity_Title
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Application_Entity_Title: $.ComponentSpec[] = [
    ,/* FIXME: ap-title COULD_NOT_RESOLVE_TYPE_DEF */
/* FIXME: ae-qualifier COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Application_Entity_Title */
/**
 * @summary The Trailing Root Component Types of Application_Entity_Title
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Application_Entity_Title: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Application_Entity_Title */
/**
 * @summary The Extension Addition Component Types of Application_Entity_Title
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Application_Entity_Title: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Application_Entity_Title */
let _cached_decoder_for_Application_Entity_Title: $.ASN1Decoder<Application_Entity_Title> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _decode_Application_Entity_Title */
/**
 * @summary Decodes an ASN.1 element into a(n) Application_Entity_Title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_Entity_Title} The decoded data structure.
 */
export function _decode_Application_Entity_Title(el: _Element) {
    if (!_cached_decoder_for_Application_Entity_Title) {
        _cached_decoder_for_Application_Entity_Title = function (
            el: _Element
        ): Application_Entity_Title {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Application-Entity-Title contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'ap-title';
            sequence[1].name = 'ae-qualifier';
            let ap_title!: AP_title;
            let ae_qualifier!: AE_qualifier;
            ap_title = _decode_AP_title(sequence[0]);
            ae_qualifier = _decode_AE_qualifier(sequence[1]);
            return new Application_Entity_Title(ap_title, ae_qualifier);
        };
    }
    return _cached_decoder_for_Application_Entity_Title(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Application_Entity_Title */
let _cached_encoder_for_Application_Entity_Title: $.ASN1Encoder<Application_Entity_Title> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Application_Entity_Title */

/* START_OF_SYMBOL_DEFINITION _encode_Application_Entity_Title */
/**
 * @summary Encodes a(n) Application_Entity_Title into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_Entity_Title, encoded as an ASN.1 Element.
 */
export function _encode_Application_Entity_Title(
    value: Application_Entity_Title,
    elGetter: $.ASN1Encoder<Application_Entity_Title>
) {
    if (!_cached_encoder_for_Application_Entity_Title) {
        _cached_encoder_for_Application_Entity_Title = function (
            value: Application_Entity_Title,
            elGetter: $.ASN1Encoder<Application_Entity_Title>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AP_title(
                            value.ap_title,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AE_qualifier(
                            value.ae_qualifier,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Application_Entity_Title(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Application_Entity_Title */

/* eslint-enable */
