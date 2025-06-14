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
import { INSURANCE_SCHEME } from '../E-health-identification/INSURANCE-SCHEME.oca.mjs';
export { INSURANCE_SCHEME } from '../E-health-identification/INSURANCE-SCHEME.oca.mjs';
import { InsuranceSchemes } from '../E-health-identification/InsuranceSchemes.osa.mjs';
export { InsuranceSchemes } from '../E-health-identification/InsuranceSchemes.osa.mjs';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION InsuranceIdentification */
/**
 * @summary InsuranceIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InsuranceIdentification ::= SEQUENCE {
 *   scheme         INSURANCE-SCHEME.&id({InsuranceSchemes}),
 *   schemeName     INSURANCE-SCHEME.&name ({InsuranceSchemes}{@.scheme}) OPTIONAL,
 *   manufacturerId INSURANCE-SCHEME.&Company ({InsuranceSchemes}{@.scheme}),
 *   insurance      INSURANCE-SCHEME.&InsuranceType ({InsuranceSchemes}{@.scheme}),
 *   insuranceCert  INSURANCE-SCHEME.&Certification ({InsuranceSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class InsuranceIdentification {
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
         * @summary `manufacturerId`.
         * @public
         * @readonly
         */
        readonly manufacturerId: _Element,
        /**
         * @summary `insurance`.
         * @public
         * @readonly
         */
        readonly insurance: _Element,
        /**
         * @summary `insuranceCert`.
         * @public
         * @readonly
         */
        readonly insuranceCert: _Element
    ) {}

    /**
     * @summary Restructures an object into a InsuranceIdentification
     * @description
     *
     * This takes an `object` and converts it to a `InsuranceIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InsuranceIdentification`.
     * @returns {InsuranceIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof InsuranceIdentification]: InsuranceIdentification[_K];
        }
    ): InsuranceIdentification {
        return new InsuranceIdentification(
            _o.scheme,
            _o.schemeName,
            _o.manufacturerId,
            _o.insurance,
            _o.insuranceCert
        );
    }
}
/* END_OF_SYMBOL_DEFINITION InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InsuranceIdentification */
/**
 * @summary The Leading Root Component Types of InsuranceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InsuranceIdentification: $.ComponentSpec[] = [
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
        'manufacturerId',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'insurance',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'insuranceCert',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InsuranceIdentification */
/**
 * @summary The Trailing Root Component Types of InsuranceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InsuranceIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InsuranceIdentification */
/**
 * @summary The Extension Addition Component Types of InsuranceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InsuranceIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InsuranceIdentification */
let _cached_decoder_for_InsuranceIdentification: $.ASN1Decoder<InsuranceIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _decode_InsuranceIdentification */
/**
 * @summary Decodes an ASN.1 element into a(n) InsuranceIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InsuranceIdentification} The decoded data structure.
 */
export function _decode_InsuranceIdentification(el: _Element) {
    if (!_cached_decoder_for_InsuranceIdentification) {
        _cached_decoder_for_InsuranceIdentification = function (
            el: _Element
        ): InsuranceIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId!: _Element;
            let insurance!: _Element;
            let insuranceCert!: _Element;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                manufacturerId: (_el: _Element): void => {
                    manufacturerId = $._decodeAny(_el);
                },
                insurance: (_el: _Element): void => {
                    insurance = $._decodeAny(_el);
                },
                insuranceCert: (_el: _Element): void => {
                    insuranceCert = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InsuranceIdentification,
                _extension_additions_list_spec_for_InsuranceIdentification,
                _root_component_type_list_2_spec_for_InsuranceIdentification,
                undefined
            );
            return new InsuranceIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                manufacturerId,
                insurance,
                insuranceCert
            );
        };
    }
    return _cached_decoder_for_InsuranceIdentification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InsuranceIdentification */
let _cached_encoder_for_InsuranceIdentification: $.ASN1Encoder<InsuranceIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InsuranceIdentification */

/* START_OF_SYMBOL_DEFINITION _encode_InsuranceIdentification */
/**
 * @summary Encodes a(n) InsuranceIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InsuranceIdentification, encoded as an ASN.1 Element.
 */
export function _encode_InsuranceIdentification(
    value: InsuranceIdentification,
    elGetter: $.ASN1Encoder<InsuranceIdentification>
) {
    if (!_cached_encoder_for_InsuranceIdentification) {
        _cached_encoder_for_InsuranceIdentification = function (
            value: InsuranceIdentification,
            elGetter: $.ASN1Encoder<InsuranceIdentification>
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
                            value.manufacturerId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.insurance, $.BER),
                        /* REQUIRED   */ $._encodeAny(
                            value.insuranceCert,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InsuranceIdentification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InsuranceIdentification */

/* eslint-enable */
