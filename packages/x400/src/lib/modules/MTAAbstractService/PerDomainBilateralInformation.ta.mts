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
import {
    BilateralDomain,
    _decode_BilateralDomain,
    _encode_BilateralDomain,
} from '../MTAAbstractService/BilateralDomain.ta.mjs';
export {
    BilateralDomain,
    _decode_BilateralDomain,
    _encode_BilateralDomain,
} from '../MTAAbstractService/BilateralDomain.ta.mjs';
import { BILATERAL } from '../MTAAbstractService/BILATERAL.oca.mjs';
export { BILATERAL } from '../MTAAbstractService/BILATERAL.oca.mjs';
import {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from '../MTSAbstractService/CountryName.ta.mjs';
export {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from '../MTSAbstractService/CountryName.ta.mjs';
import {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
export {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
import {
    PrivateDomainIdentifier,
    _decode_PrivateDomainIdentifier,
    _encode_PrivateDomainIdentifier,
} from '../MTSAbstractService/PrivateDomainIdentifier.ta.mjs';
export {
    PrivateDomainIdentifier,
    _decode_PrivateDomainIdentifier,
    _encode_PrivateDomainIdentifier,
} from '../MTSAbstractService/PrivateDomainIdentifier.ta.mjs';
import {
    BilateralDomain_domain_private_domain,
} from '../MTAAbstractService/BilateralDomain-domain-private-domain.ta.mjs';
import {
    _root_component_type_list_1_spec_for_BilateralDomain,
} from '../MTAAbstractService/BilateralDomain.ta.mjs';
import {
    BilateralDomain_domain,
    _decode_BilateralDomain_domain,
    _encode_BilateralDomain_domain,
} from '../MTAAbstractService/BilateralDomain-domain.ta.mjs';

// Manually edited.

/* START_OF_SYMBOL_DEFINITION PerDomainBilateralInformation */
/**
 * @summary PerDomainBilateralInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerDomainBilateralInformation ::= SEQUENCE {
 *   COMPONENTS OF BilateralDomain,
 *   bilateral-information  BILATERAL.&Type
 * }
 * ```
 *
 * @class
 */
export class PerDomainBilateralInformation implements BilateralDomain {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name: CountryName /* REPLICATED_COMPONENT */,
        /**
         * @summary `domain`.
         * @public
         * @readonly
         */
        readonly domain: BilateralDomain_domain /* REPLICATED_COMPONENT */,
        /**
         * @summary `bilateral_information`.
         * @public
         * @readonly
         */
        readonly bilateral_information: _Element
    ) {}

    /**
     * @summary Restructures an object into a PerDomainBilateralInformation
     * @description
     *
     * This takes an `object` and converts it to a `PerDomainBilateralInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerDomainBilateralInformation`.
     * @returns {PerDomainBilateralInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof PerDomainBilateralInformation]: PerDomainBilateralInformation[_K];
        }
    ): PerDomainBilateralInformation {
        return new PerDomainBilateralInformation(
            _o.country_name,
            _o.domain,
            _o.bilateral_information
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerDomainBilateralInformation */
/**
 * @summary The Leading Root Component Types of PerDomainBilateralInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerDomainBilateralInformation: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_BilateralDomain,
    new $.ComponentSpec(
        'bilateral-information',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerDomainBilateralInformation */
/**
 * @summary The Trailing Root Component Types of PerDomainBilateralInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerDomainBilateralInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerDomainBilateralInformation */
/**
 * @summary The Extension Addition Component Types of PerDomainBilateralInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerDomainBilateralInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerDomainBilateralInformation */
let _cached_decoder_for_PerDomainBilateralInformation: $.ASN1Decoder<PerDomainBilateralInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _decode_PerDomainBilateralInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) PerDomainBilateralInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerDomainBilateralInformation} The decoded data structure.
 */
export function _decode_PerDomainBilateralInformation(el: _Element) {
    if (!_cached_decoder_for_PerDomainBilateralInformation) {
        _cached_decoder_for_PerDomainBilateralInformation = function (
            el: _Element
        ): PerDomainBilateralInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let country_name!: CountryName;
            let domain!: BilateralDomain_domain
            let bilateral_information!: _Element;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'country-name': (_el: _Element): void => {
                    country_name = _decode_CountryName(_el);
                },
                domain: (_el: _Element): void => {
                    domain = _decode_BilateralDomain_domain(_el);
                },
                'bilateral-information': (_el: _Element): void => {
                    bilateral_information = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerDomainBilateralInformation,
                _extension_additions_list_spec_for_PerDomainBilateralInformation,
                _root_component_type_list_2_spec_for_PerDomainBilateralInformation,
                undefined
            );
            return new PerDomainBilateralInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                country_name,
                domain,
                bilateral_information
            );
        };
    }
    return _cached_decoder_for_PerDomainBilateralInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerDomainBilateralInformation */
let _cached_encoder_for_PerDomainBilateralInformation: $.ASN1Encoder<PerDomainBilateralInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerDomainBilateralInformation */

/* START_OF_SYMBOL_DEFINITION _encode_PerDomainBilateralInformation */
/**
 * @summary Encodes a(n) PerDomainBilateralInformation into an ASN.1 Element.
 * @function
 * @param {PerDomainBilateralInformation} value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerDomainBilateralInformation, encoded as an ASN.1 Element.
 */
export function _encode_PerDomainBilateralInformation(
    value: PerDomainBilateralInformation,
    elGetter: $.ASN1Encoder<PerDomainBilateralInformation>
) {
    if (!_cached_encoder_for_PerDomainBilateralInformation) {
        _cached_encoder_for_PerDomainBilateralInformation = function (
            value: PerDomainBilateralInformation,
            elGetter: $.ASN1Encoder<PerDomainBilateralInformation>
        ): _Element {
            return $._encodeSequence(
                [
                    /* REQUIRED   */ _encode_CountryName(
                        value.country_name,
                        $.BER
                    ),
                    /* REQUIRED   */ _encode_BilateralDomain_domain(
                        value.domain,
                        $.BER
                    ),
                    /* REQUIRED   */ $._encodeAny(
                        value.bilateral_information,
                        $.BER
                    ),
                ], $.BER
            );
        };
    }
    return _cached_encoder_for_PerDomainBilateralInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerDomainBilateralInformation */

/* eslint-enable */
