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
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta';
export {
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta';
import {
    DomainSuppliedInformation,
    _decode_DomainSuppliedInformation,
    _encode_DomainSuppliedInformation,
} from '../MTAAbstractService/DomainSuppliedInformation.ta';
export {
    DomainSuppliedInformation,
    _decode_DomainSuppliedInformation,
    _encode_DomainSuppliedInformation,
} from '../MTAAbstractService/DomainSuppliedInformation.ta';

/* START_OF_SYMBOL_DEFINITION TraceInformationElement */
/**
 * @summary TraceInformationElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TraceInformationElement ::= SEQUENCE {
 *   global-domain-identifier     GlobalDomainIdentifier,
 *   domain-supplied-information  DomainSuppliedInformation
 * }
 * ```
 *
 * @class
 */
export class TraceInformationElement {
    constructor(
        /**
         * @summary `global_domain_identifier`.
         * @public
         * @readonly
         */
        readonly global_domain_identifier: GlobalDomainIdentifier,
        /**
         * @summary `domain_supplied_information`.
         * @public
         * @readonly
         */
        readonly domain_supplied_information: DomainSuppliedInformation
    ) {}

    /**
     * @summary Restructures an object into a TraceInformationElement
     * @description
     *
     * This takes an `object` and converts it to a `TraceInformationElement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceInformationElement`.
     * @returns {TraceInformationElement}
     */
    public static _from_object(
        _o: {
            [_K in keyof TraceInformationElement]: TraceInformationElement[_K];
        }
    ): TraceInformationElement {
        return new TraceInformationElement(
            _o.global_domain_identifier,
            _o.domain_supplied_information
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TraceInformationElement */
/**
 * @summary The Leading Root Component Types of TraceInformationElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TraceInformationElement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'global-domain-identifier',
        false,
        $.hasTag(_TagClass.application, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'domain-supplied-information',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TraceInformationElement */
/**
 * @summary The Trailing Root Component Types of TraceInformationElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TraceInformationElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TraceInformationElement */
/**
 * @summary The Extension Addition Component Types of TraceInformationElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TraceInformationElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceInformationElement */
let _cached_decoder_for_TraceInformationElement: $.ASN1Decoder<TraceInformationElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _decode_TraceInformationElement */
/**
 * @summary Decodes an ASN.1 element into a(n) TraceInformationElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceInformationElement} The decoded data structure.
 */
export function _decode_TraceInformationElement(el: _Element) {
    if (!_cached_decoder_for_TraceInformationElement) {
        _cached_decoder_for_TraceInformationElement = function (
            el: _Element
        ): TraceInformationElement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TraceInformationElement contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'global-domain-identifier';
            sequence[1].name = 'domain-supplied-information';
            let global_domain_identifier!: GlobalDomainIdentifier;
            let domain_supplied_information!: DomainSuppliedInformation;
            global_domain_identifier = _decode_GlobalDomainIdentifier(
                sequence[0]
            );
            domain_supplied_information = _decode_DomainSuppliedInformation(
                sequence[1]
            );
            return new TraceInformationElement(
                global_domain_identifier,
                domain_supplied_information
            );
        };
    }
    return _cached_decoder_for_TraceInformationElement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceInformationElement */
let _cached_encoder_for_TraceInformationElement: $.ASN1Encoder<TraceInformationElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _encode_TraceInformationElement */
/**
 * @summary Encodes a(n) TraceInformationElement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInformationElement, encoded as an ASN.1 Element.
 */
export function _encode_TraceInformationElement(
    value: TraceInformationElement,
    elGetter: $.ASN1Encoder<TraceInformationElement>
) {
    if (!_cached_encoder_for_TraceInformationElement) {
        _cached_encoder_for_TraceInformationElement = function (
            value: TraceInformationElement,
            elGetter: $.ASN1Encoder<TraceInformationElement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GlobalDomainIdentifier(
                            value.global_domain_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DomainSuppliedInformation(
                            value.domain_supplied_information,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TraceInformationElement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TraceInformationElement */

/* eslint-enable */
