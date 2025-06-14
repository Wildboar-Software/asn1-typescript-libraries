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
import { MANUFACTURER_SCHEME } from '../E-health-identification/MANUFACTURER-SCHEME.oca.mjs';
export { MANUFACTURER_SCHEME } from '../E-health-identification/MANUFACTURER-SCHEME.oca.mjs';
import { ManufacturerSchemes } from '../E-health-identification/ManufacturerSchemes.osa.mjs';
export { ManufacturerSchemes } from '../E-health-identification/ManufacturerSchemes.osa.mjs';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ManufacturerIdentification */
/**
 * @summary ManufacturerIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManufacturerIdentification ::= SEQUENCE {
 *   scheme         MANUFACTURER-SCHEME.&id ({ManufacturerSchemes}),
 *   schemeName     MANUFACTURER-SCHEME.&name ({ManufacturerSchemes}{@.scheme}) OPTIONAL,
 *   manufacturerId MANUFACTURER-SCHEME.&Manufacturer ({ManufacturerSchemes}{@.scheme}),
 *   drugId         MANUFACTURER-SCHEME.&Drug ({ManufacturerSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class ManufacturerIdentification {
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
         * @summary `drugId`.
         * @public
         * @readonly
         */
        readonly drugId: _Element
    ) {}

    /**
     * @summary Restructures an object into a ManufacturerIdentification
     * @description
     *
     * This takes an `object` and converts it to a `ManufacturerIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManufacturerIdentification`.
     * @returns {ManufacturerIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof ManufacturerIdentification]: ManufacturerIdentification[_K];
        }
    ): ManufacturerIdentification {
        return new ManufacturerIdentification(
            _o.scheme,
            _o.schemeName,
            _o.manufacturerId,
            _o.drugId
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ManufacturerIdentification */
/**
 * @summary The Leading Root Component Types of ManufacturerIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ManufacturerIdentification: $.ComponentSpec[] = [
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
        'drugId',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ManufacturerIdentification */
/**
 * @summary The Trailing Root Component Types of ManufacturerIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ManufacturerIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ManufacturerIdentification */
/**
 * @summary The Extension Addition Component Types of ManufacturerIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ManufacturerIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManufacturerIdentification */
let _cached_decoder_for_ManufacturerIdentification: $.ASN1Decoder<ManufacturerIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _decode_ManufacturerIdentification */
/**
 * @summary Decodes an ASN.1 element into a(n) ManufacturerIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManufacturerIdentification} The decoded data structure.
 */
export function _decode_ManufacturerIdentification(el: _Element) {
    if (!_cached_decoder_for_ManufacturerIdentification) {
        _cached_decoder_for_ManufacturerIdentification = function (
            el: _Element
        ): ManufacturerIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId!: _Element;
            let drugId!: _Element;
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
                drugId: (_el: _Element): void => {
                    drugId = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ManufacturerIdentification,
                _extension_additions_list_spec_for_ManufacturerIdentification,
                _root_component_type_list_2_spec_for_ManufacturerIdentification,
                undefined
            );
            return new ManufacturerIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                manufacturerId,
                drugId
            );
        };
    }
    return _cached_decoder_for_ManufacturerIdentification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManufacturerIdentification */
let _cached_encoder_for_ManufacturerIdentification: $.ASN1Encoder<ManufacturerIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManufacturerIdentification */

/* START_OF_SYMBOL_DEFINITION _encode_ManufacturerIdentification */
/**
 * @summary Encodes a(n) ManufacturerIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManufacturerIdentification, encoded as an ASN.1 Element.
 */
export function _encode_ManufacturerIdentification(
    value: ManufacturerIdentification,
    elGetter: $.ASN1Encoder<ManufacturerIdentification>
) {
    if (!_cached_encoder_for_ManufacturerIdentification) {
        _cached_encoder_for_ManufacturerIdentification = function (
            value: ManufacturerIdentification,
            elGetter: $.ASN1Encoder<ManufacturerIdentification>
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
                        /* REQUIRED   */ $._encodeAny(value.drugId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ManufacturerIdentification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManufacturerIdentification */

/* eslint-enable */
