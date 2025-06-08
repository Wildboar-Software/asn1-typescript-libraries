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
import { SOFTWARE_SCHEME } from '../E-health-identification/SOFTWARE-SCHEME.oca';
export { SOFTWARE_SCHEME } from '../E-health-identification/SOFTWARE-SCHEME.oca';
import { SoftwareSchemes } from '../E-health-identification/SoftwareSchemes.osa';
export { SoftwareSchemes } from '../E-health-identification/SoftwareSchemes.osa';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta';

/* START_OF_SYMBOL_DEFINITION SoftwareIdentification */
/**
 * @summary SoftwareIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SoftwareIdentification ::= SEQUENCE {
 *   scheme         SOFTWARE-SCHEME.&id({SoftwareSchemes}),
 *   schemeName     SOFTWARE-SCHEME.&name ({SoftwareSchemes}{@.scheme}) OPTIONAL,
 *   manufacturerId SOFTWARE-SCHEME.&Manufacturer ({SoftwareSchemes}{@.scheme})
 *                    OPTIONAL,
 *   software       SOFTWARE-SCHEME.&Software ({SoftwareSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class SoftwareIdentification {
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
        readonly manufacturerId: OPTIONAL<_Element>,
        /**
         * @summary `software`.
         * @public
         * @readonly
         */
        readonly software: _Element
    ) {}

    /**
     * @summary Restructures an object into a SoftwareIdentification
     * @description
     *
     * This takes an `object` and converts it to a `SoftwareIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SoftwareIdentification`.
     * @returns {SoftwareIdentification}
     */
    public static _from_object(
        _o: { [_K in keyof SoftwareIdentification]: SoftwareIdentification[_K] }
    ): SoftwareIdentification {
        return new SoftwareIdentification(
            _o.scheme,
            _o.schemeName,
            _o.manufacturerId,
            _o.software
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SoftwareIdentification */
/**
 * @summary The Leading Root Component Types of SoftwareIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SoftwareIdentification: $.ComponentSpec[] = [
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
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'software',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SoftwareIdentification */
/**
 * @summary The Trailing Root Component Types of SoftwareIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SoftwareIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SoftwareIdentification */
/**
 * @summary The Extension Addition Component Types of SoftwareIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SoftwareIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SoftwareIdentification */
let _cached_decoder_for_SoftwareIdentification: $.ASN1Decoder<SoftwareIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _decode_SoftwareIdentification */
/**
 * @summary Decodes an ASN.1 element into a(n) SoftwareIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SoftwareIdentification} The decoded data structure.
 */
export function _decode_SoftwareIdentification(el: _Element) {
    if (!_cached_decoder_for_SoftwareIdentification) {
        _cached_decoder_for_SoftwareIdentification = function (
            el: _Element
        ): SoftwareIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId: OPTIONAL<_Element>;
            let software!: _Element;
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
                software: (_el: _Element): void => {
                    software = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SoftwareIdentification,
                _extension_additions_list_spec_for_SoftwareIdentification,
                _root_component_type_list_2_spec_for_SoftwareIdentification,
                undefined
            );
            return new SoftwareIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                manufacturerId,
                software
            );
        };
    }
    return _cached_decoder_for_SoftwareIdentification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SoftwareIdentification */
let _cached_encoder_for_SoftwareIdentification: $.ASN1Encoder<SoftwareIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SoftwareIdentification */

/* START_OF_SYMBOL_DEFINITION _encode_SoftwareIdentification */
/**
 * @summary Encodes a(n) SoftwareIdentification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SoftwareIdentification, encoded as an ASN.1 Element.
 */
export function _encode_SoftwareIdentification(
    value: SoftwareIdentification,
    elGetter: $.ASN1Encoder<SoftwareIdentification>
) {
    if (!_cached_encoder_for_SoftwareIdentification) {
        _cached_encoder_for_SoftwareIdentification = function (
            value: SoftwareIdentification,
            elGetter: $.ASN1Encoder<SoftwareIdentification>
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
                        /* IF_ABSENT  */ value.manufacturerId === undefined
                            ? undefined
                            : $._encodeAny(value.manufacturerId, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.software, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SoftwareIdentification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SoftwareIdentification */

/* eslint-enable */
