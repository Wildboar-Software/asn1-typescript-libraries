/* eslint-disable */
import {
    OPTIONAL,
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
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateSerialNumber.ta.mjs';
import {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UniqueIdentifier.ta.mjs';

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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'pkiCertificateIssuerName',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'pkiCertificateIssuerUniqueIdentifier',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of PKICertificateInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKICertificateInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PKICertificateInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKICertificateInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_PKICertificateInformation: $.ASN1Decoder<PKICertificateInformation> | null = null;


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


let _cached_encoder_for_PKICertificateInformation: $.ASN1Encoder<PKICertificateInformation> | null = null;


/**
 * @summary Encodes a(n) PKICertificateInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKICertificateInformation, encoded as an ASN.1 Element.
 */
export function _encode_PKICertificateInformation(
    value: PKICertificateInformation,
    elGetter: $.ASN1Encoder<PKICertificateInformation>
) {
    if (!_cached_encoder_for_PKICertificateInformation) {
        _cached_encoder_for_PKICertificateInformation = function (
            value: PKICertificateInformation        ): _Element {
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


/* eslint-enable */
