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
import { PATIENT_SCHEME } from '../E-health-identification/PATIENT-SCHEME.oca';
export { PATIENT_SCHEME } from '../E-health-identification/PATIENT-SCHEME.oca';
import { PatientSchemes } from '../E-health-identification/PatientSchemes.osa';
export { PatientSchemes } from '../E-health-identification/PatientSchemes.osa';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta';

/* START_OF_SYMBOL_DEFINITION PatientIdentification */
/**
 * @summary PatientIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PatientIdentification ::= SEQUENCE {
 *   scheme        PATIENT-SCHEME.&id ({PatientSchemes}),
 *   schemeName    PATIENT-SCHEME.&name ({PatientSchemes}{@.scheme}) OPTIONAL,
 *   patientId     PATIENT-SCHEME.&Identification ({PatientSchemes}{@.scheme}) }
 * ```
 *
 * @class
 */
export class PatientIdentification {
    constructor(
        /**
         * @summary `scheme`.
         * @public
         * @readonly
         */
        readonly scheme: OBJECT_IDENTIFIER,
        /**
         * @summary `schemeName`.
         * @public
         * @readonly
         */
        readonly schemeName: OPTIONAL<SchemeName>,
        /**
         * @summary `patientId`.
         * @public
         * @readonly
         */
        readonly patientId: _Element
    ) {}

    /**
     * @summary Restructures an object into a PatientIdentification
     * @description
     *
     * This takes an `object` and converts it to a `PatientIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PatientIdentification`.
     * @returns {PatientIdentification}
     */
    public static _from_object(
        _o: { [_K in keyof PatientIdentification]: PatientIdentification[_K] }
    ): PatientIdentification {
        return new PatientIdentification(
            _o.scheme,
            _o.schemeName,
            _o.patientId
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PatientIdentification */
/**
 * @summary The Leading Root Component Types of PatientIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PatientIdentification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scheme',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'schemeName',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'patientId',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PatientIdentification */
/**
 * @summary The Trailing Root Component Types of PatientIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PatientIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PatientIdentification */
/**
 * @summary The Extension Addition Component Types of PatientIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PatientIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PatientIdentification */
let _cached_decoder_for_PatientIdentification: $.ASN1Decoder<PatientIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _decode_PatientIdentification */
/**
 * @summary Decodes an ASN.1 element into a(n) PatientIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PatientIdentification} The decoded data structure.
 */
export function _decode_PatientIdentification(el: _Element) {
    if (!_cached_decoder_for_PatientIdentification) {
        _cached_decoder_for_PatientIdentification = function (
            el: _Element
        ): PatientIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let patientId!: _Element;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                patientId: (_el: _Element): void => {
                    patientId = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PatientIdentification,
                _extension_additions_list_spec_for_PatientIdentification,
                _root_component_type_list_2_spec_for_PatientIdentification,
                undefined
            );
            return new PatientIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                patientId
            );
        };
    }
    return _cached_decoder_for_PatientIdentification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PatientIdentification */
let _cached_encoder_for_PatientIdentification: $.ASN1Encoder<PatientIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PatientIdentification */

/* START_OF_SYMBOL_DEFINITION _encode_PatientIdentification */
/**
 * @summary Encodes a(n) PatientIdentification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PatientIdentification, encoded as an ASN.1 Element.
 */
export function _encode_PatientIdentification(
    value: PatientIdentification,
    elGetter: $.ASN1Encoder<PatientIdentification>
) {
    if (!_cached_encoder_for_PatientIdentification) {
        _cached_encoder_for_PatientIdentification = function (
            value: PatientIdentification,
            elGetter: $.ASN1Encoder<PatientIdentification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.scheme,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.schemeName === undefined
                            ? undefined
                            : _encode_SchemeName(value.schemeName, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.patientId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PatientIdentification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PatientIdentification */

/* eslint-enable */
