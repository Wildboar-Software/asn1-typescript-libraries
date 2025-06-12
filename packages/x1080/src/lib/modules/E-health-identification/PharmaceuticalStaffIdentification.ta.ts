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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { MEDICAL_STAFF_SCHEME } from '../E-health-identification/MEDICAL-STAFF-SCHEME.oca.js';
export { MEDICAL_STAFF_SCHEME } from '../E-health-identification/MEDICAL-STAFF-SCHEME.oca.js';
import { MedicalStaffSchemes } from '../E-health-identification/MedicalStaffSchemes.osa.js';
export { MedicalStaffSchemes } from '../E-health-identification/MedicalStaffSchemes.osa.js';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.js';

/* START_OF_SYMBOL_DEFINITION PharmaceuticalStaffIdentification */
/**
 * @summary PharmaceuticalStaffIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PharmaceuticalStaffIdentification ::= SEQUENCE {
 *   scheme          MEDICAL-STAFF-SCHEME.&id ({MedicalStaffSchemes}),
 *   schemeName      MEDICAL-STAFF-SCHEME.&name ({MedicalStaffSchemes}{@.scheme}) OPTIONAL,
 *   medicalStaffId  MEDICAL-STAFF-SCHEME.&Identification ({MedicalStaffSchemes}{@.scheme}),
 *   qualifications  MEDICAL-STAFF-SCHEME.&Qualifications ({MedicalStaffSchemes}{@.scheme}) OPTIONAL}
 * ```
 *
 * @class
 */
export class PharmaceuticalStaffIdentification {
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
         * @summary `medicalStaffId`.
         * @public
         * @readonly
         */
        readonly medicalStaffId: _Element,
        /**
         * @summary `qualifications`.
         * @public
         * @readonly
         */
        readonly qualifications: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a PharmaceuticalStaffIdentification
     * @description
     *
     * This takes an `object` and converts it to a `PharmaceuticalStaffIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PharmaceuticalStaffIdentification`.
     * @returns {PharmaceuticalStaffIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof PharmaceuticalStaffIdentification]: PharmaceuticalStaffIdentification[_K];
        }
    ): PharmaceuticalStaffIdentification {
        return new PharmaceuticalStaffIdentification(
            _o.scheme,
            _o.schemeName,
            _o.medicalStaffId,
            _o.qualifications
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PharmaceuticalStaffIdentification */
/**
 * @summary The Leading Root Component Types of PharmaceuticalStaffIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PharmaceuticalStaffIdentification: $.ComponentSpec[] = [
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
        'medicalStaffId',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'qualifications',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PharmaceuticalStaffIdentification */
/**
 * @summary The Trailing Root Component Types of PharmaceuticalStaffIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PharmaceuticalStaffIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PharmaceuticalStaffIdentification */
/**
 * @summary The Extension Addition Component Types of PharmaceuticalStaffIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PharmaceuticalStaffIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PharmaceuticalStaffIdentification */
let _cached_decoder_for_PharmaceuticalStaffIdentification: $.ASN1Decoder<PharmaceuticalStaffIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _decode_PharmaceuticalStaffIdentification */
/**
 * @summary Decodes an ASN.1 element into a(n) PharmaceuticalStaffIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PharmaceuticalStaffIdentification} The decoded data structure.
 */
export function _decode_PharmaceuticalStaffIdentification(el: _Element) {
    if (!_cached_decoder_for_PharmaceuticalStaffIdentification) {
        _cached_decoder_for_PharmaceuticalStaffIdentification = function (
            el: _Element
        ): PharmaceuticalStaffIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let medicalStaffId!: _Element;
            let qualifications: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                medicalStaffId: (_el: _Element): void => {
                    medicalStaffId = $._decodeAny(_el);
                },
                qualifications: (_el: _Element): void => {
                    qualifications = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PharmaceuticalStaffIdentification,
                _extension_additions_list_spec_for_PharmaceuticalStaffIdentification,
                _root_component_type_list_2_spec_for_PharmaceuticalStaffIdentification,
                undefined
            );
            return new PharmaceuticalStaffIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                medicalStaffId,
                qualifications
            );
        };
    }
    return _cached_decoder_for_PharmaceuticalStaffIdentification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PharmaceuticalStaffIdentification */
let _cached_encoder_for_PharmaceuticalStaffIdentification: $.ASN1Encoder<PharmaceuticalStaffIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PharmaceuticalStaffIdentification */

/* START_OF_SYMBOL_DEFINITION _encode_PharmaceuticalStaffIdentification */
/**
 * @summary Encodes a(n) PharmaceuticalStaffIdentification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PharmaceuticalStaffIdentification, encoded as an ASN.1 Element.
 */
export function _encode_PharmaceuticalStaffIdentification(
    value: PharmaceuticalStaffIdentification,
    elGetter: $.ASN1Encoder<PharmaceuticalStaffIdentification>
) {
    if (!_cached_encoder_for_PharmaceuticalStaffIdentification) {
        _cached_encoder_for_PharmaceuticalStaffIdentification = function (
            value: PharmaceuticalStaffIdentification,
            elGetter: $.ASN1Encoder<PharmaceuticalStaffIdentification>
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
                        /* REQUIRED   */ $._encodeAny(
                            value.medicalStaffId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.qualifications === undefined
                            ? undefined
                            : $._encodeAny(value.qualifications, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PharmaceuticalStaffIdentification(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PharmaceuticalStaffIdentification */

/* eslint-enable */
