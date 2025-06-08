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
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateSerialNumber.ta';
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateSerialNumber.ta';
import {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta';
export {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta';
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UniqueIdentifier.ta';
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UniqueIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION PKICertificateInformation */
/**
 * @summary PKICertificateInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKICertificateInformation ::= SEQUENCE {
 *     pkiCertificateSerialNumber              CertificateSerialNumber,
 *     pkiCertificateIssuerName                Name,
 *     pkiCertificateIssuerUniqueIdentifier    UniqueIdentifier OPTIONAL }
 * ```
 *
 * @class
 */
export class PKICertificateInformation {
    constructor(
        /**
         * @summary `pkiCertificateSerialNumber`.
         * @public
         * @readonly
         */
        readonly pkiCertificateSerialNumber: CertificateSerialNumber,
        /**
         * @summary `pkiCertificateIssuerName`.
         * @public
         * @readonly
         */
        readonly pkiCertificateIssuerName: Name,
        /**
         * @summary `pkiCertificateIssuerUniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly pkiCertificateIssuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a PKICertificateInformation
     * @description
     *
     * This takes an `object` and converts it to a `PKICertificateInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKICertificateInformation`.
     * @returns {PKICertificateInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof PKICertificateInformation]: PKICertificateInformation[_K];
        }
    ): PKICertificateInformation {
        return new PKICertificateInformation(
            _o.pkiCertificateSerialNumber,
            _o.pkiCertificateIssuerName,
            _o.pkiCertificateIssuerUniqueIdentifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKICertificateInformation */
/**
 * @summary The Leading Root Component Types of PKICertificateInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKICertificateInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pkiCertificateSerialNumber',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'pkiCertificateIssuerName',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'pkiCertificateIssuerUniqueIdentifier',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKICertificateInformation */
/**
 * @summary The Trailing Root Component Types of PKICertificateInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKICertificateInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKICertificateInformation */
/**
 * @summary The Extension Addition Component Types of PKICertificateInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKICertificateInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKICertificateInformation */
let _cached_decoder_for_PKICertificateInformation: $.ASN1Decoder<PKICertificateInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _decode_PKICertificateInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) PKICertificateInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKICertificateInformation} The decoded data structure.
 */
export function _decode_PKICertificateInformation(el: _Element) {
    if (!_cached_decoder_for_PKICertificateInformation) {
        _cached_decoder_for_PKICertificateInformation = function (
            el: _Element
        ): PKICertificateInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pkiCertificateSerialNumber!: CertificateSerialNumber;
            let pkiCertificateIssuerName!: Name;
            let pkiCertificateIssuerUniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pkiCertificateSerialNumber: (_el: _Element): void => {
                    pkiCertificateSerialNumber = _decode_CertificateSerialNumber(
                        _el
                    );
                },
                pkiCertificateIssuerName: (_el: _Element): void => {
                    pkiCertificateIssuerName = _decode_Name(_el);
                },
                pkiCertificateIssuerUniqueIdentifier: (_el: _Element): void => {
                    pkiCertificateIssuerUniqueIdentifier = _decode_UniqueIdentifier(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKICertificateInformation,
                _extension_additions_list_spec_for_PKICertificateInformation,
                _root_component_type_list_2_spec_for_PKICertificateInformation,
                undefined
            );
            return new PKICertificateInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                pkiCertificateSerialNumber,
                pkiCertificateIssuerName,
                pkiCertificateIssuerUniqueIdentifier
            );
        };
    }
    return _cached_decoder_for_PKICertificateInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKICertificateInformation */
let _cached_encoder_for_PKICertificateInformation: $.ASN1Encoder<PKICertificateInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKICertificateInformation */

/* START_OF_SYMBOL_DEFINITION _encode_PKICertificateInformation */
/**
 * @summary Encodes a(n) PKICertificateInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKICertificateInformation, encoded as an ASN.1 Element.
 */
export function _encode_PKICertificateInformation(
    value: PKICertificateInformation,
    elGetter: $.ASN1Encoder<PKICertificateInformation>
) {
    if (!_cached_encoder_for_PKICertificateInformation) {
        _cached_encoder_for_PKICertificateInformation = function (
            value: PKICertificateInformation,
            elGetter: $.ASN1Encoder<PKICertificateInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.pkiCertificateSerialNumber,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Name(
                            value.pkiCertificateIssuerName,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.pkiCertificateIssuerUniqueIdentifier ===
                        undefined
                            ? undefined
                            : _encode_UniqueIdentifier(
                                  value.pkiCertificateIssuerUniqueIdentifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PKICertificateInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKICertificateInformation */

/* eslint-enable */
