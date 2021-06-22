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
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from '../PKI-Stub/GeneralNames.ta';
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from '../PKI-Stub/GeneralNames.ta';
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from '../PKI-Stub/CertificateSerialNumber.ta';
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from '../PKI-Stub/CertificateSerialNumber.ta';
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from '../PKI-Stub/UniqueIdentifier.ta';
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from '../PKI-Stub/UniqueIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION IssuerSerial */
/**
 * @summary IssuerSerial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerSerial ::= SEQUENCE {
 *   issuer     GeneralNames,
 *   serial     CertificateSerialNumber,
 *   issuerUID  UniqueIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerSerial {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: GeneralNames,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: CertificateSerialNumber,
        /**
         * @summary `issuerUID`.
         * @public
         * @readonly
         */
        readonly issuerUID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuerSerial
     * @description
     *
     * This takes an `object` and converts it to a `IssuerSerial`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerSerial`.
     * @returns {IssuerSerial}
     */
    public static _from_object(
        _o: { [_K in keyof IssuerSerial]: IssuerSerial[_K] }
    ): IssuerSerial {
        return new IssuerSerial(
            _o.issuer,
            _o.serial,
            _o.issuerUID,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IssuerSerial */
/**
 * @summary The Leading Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerSerial: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'issuer',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'serial',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'issuerUID',
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IssuerSerial */
/**
 * @summary The Trailing Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerSerial: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IssuerSerial */
/**
 * @summary The Extension Addition Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerSerial: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IssuerSerial */
let _cached_decoder_for_IssuerSerial: $.ASN1Decoder<IssuerSerial> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _decode_IssuerSerial */
/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerSerial} The decoded data structure.
 */
export function _decode_IssuerSerial(el: _Element) {
    if (!_cached_decoder_for_IssuerSerial) {
        _cached_decoder_for_IssuerSerial = function (
            el: _Element
        ): IssuerSerial {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: GeneralNames;
            let serial!: CertificateSerialNumber;
            let issuerUID: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralNames(_el);
                },
                serial: (_el: _Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
                issuerUID: (_el: _Element): void => {
                    issuerUID = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuerSerial,
                _extension_additions_list_spec_for_IssuerSerial,
                _root_component_type_list_2_spec_for_IssuerSerial,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IssuerSerial /* SEQUENCE_CONSTRUCTOR_CALL */(
                issuer,
                serial,
                issuerUID,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IssuerSerial(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IssuerSerial */
let _cached_encoder_for_IssuerSerial: $.ASN1Encoder<IssuerSerial> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IssuerSerial */

/* START_OF_SYMBOL_DEFINITION _encode_IssuerSerial */
/**
 * @summary Encodes a(n) IssuerSerial into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerial, encoded as an ASN.1 Element.
 */
export function _encode_IssuerSerial(
    value: IssuerSerial,
    elGetter: $.ASN1Encoder<IssuerSerial>
) {
    if (!_cached_encoder_for_IssuerSerial) {
        _cached_encoder_for_IssuerSerial = function (
            value: IssuerSerial,
            elGetter: $.ASN1Encoder<IssuerSerial>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralNames(
                                value.issuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serial,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.issuerUID === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(
                                      value.issuerUID,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IssuerSerial(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IssuerSerial */

/* eslint-enable */
