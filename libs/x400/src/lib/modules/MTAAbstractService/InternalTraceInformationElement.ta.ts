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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
export {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
import {
    MTASuppliedInformation,
    _decode_MTASuppliedInformation,
    _encode_MTASuppliedInformation,
} from '../MTAAbstractService/MTASuppliedInformation.ta';
export {
    MTASuppliedInformation,
    _decode_MTASuppliedInformation,
    _encode_MTASuppliedInformation,
} from '../MTAAbstractService/MTASuppliedInformation.ta';

/* START_OF_SYMBOL_DEFINITION InternalTraceInformationElement */
/**
 * @summary InternalTraceInformationElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalTraceInformationElement ::= SEQUENCE {
 *   global-domain-identifier  GlobalDomainIdentifier,
 *   mta-name                  MTAName,
 *   mta-supplied-information  MTASuppliedInformation
 * }
 * ```
 *
 * @class
 */
export class InternalTraceInformationElement {
    constructor(
        /**
         * @summary `global_domain_identifier`.
         * @public
         * @readonly
         */
        readonly global_domain_identifier: GlobalDomainIdentifier,
        /**
         * @summary `mta_name`.
         * @public
         * @readonly
         */
        readonly mta_name: MTAName,
        /**
         * @summary `mta_supplied_information`.
         * @public
         * @readonly
         */
        readonly mta_supplied_information: MTASuppliedInformation
    ) {}

    /**
     * @summary Restructures an object into a InternalTraceInformationElement
     * @description
     *
     * This takes an `object` and converts it to a `InternalTraceInformationElement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InternalTraceInformationElement`.
     * @returns {InternalTraceInformationElement}
     */
    public static _from_object(
        _o: {
            [_K in keyof InternalTraceInformationElement]: InternalTraceInformationElement[_K];
        }
    ): InternalTraceInformationElement {
        return new InternalTraceInformationElement(
            _o.global_domain_identifier,
            _o.mta_name,
            _o.mta_supplied_information
        );
    }
}
/* END_OF_SYMBOL_DEFINITION InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InternalTraceInformationElement */
/**
 * @summary The Leading Root Component Types of InternalTraceInformationElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InternalTraceInformationElement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'global-domain-identifier',
        false,
        $.hasTag(_TagClass.application, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mta-name',
        false,
        $.hasTag(_TagClass.universal, 22),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mta-supplied-information',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InternalTraceInformationElement */
/**
 * @summary The Trailing Root Component Types of InternalTraceInformationElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InternalTraceInformationElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InternalTraceInformationElement */
/**
 * @summary The Extension Addition Component Types of InternalTraceInformationElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InternalTraceInformationElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalTraceInformationElement */
let _cached_decoder_for_InternalTraceInformationElement: $.ASN1Decoder<InternalTraceInformationElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _decode_InternalTraceInformationElement */
/**
 * @summary Decodes an ASN.1 element into a(n) InternalTraceInformationElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalTraceInformationElement} The decoded data structure.
 */
export function _decode_InternalTraceInformationElement(el: _Element) {
    if (!_cached_decoder_for_InternalTraceInformationElement) {
        _cached_decoder_for_InternalTraceInformationElement = function (
            el: _Element
        ): InternalTraceInformationElement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'InternalTraceInformationElement contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'global-domain-identifier';
            sequence[1].name = 'mta-name';
            sequence[2].name = 'mta-supplied-information';
            let global_domain_identifier!: GlobalDomainIdentifier;
            let mta_name!: MTAName;
            let mta_supplied_information!: MTASuppliedInformation;
            global_domain_identifier = _decode_GlobalDomainIdentifier(
                sequence[0]
            );
            mta_name = _decode_MTAName(sequence[1]);
            mta_supplied_information = _decode_MTASuppliedInformation(
                sequence[2]
            );
            return new InternalTraceInformationElement(
                global_domain_identifier,
                mta_name,
                mta_supplied_information
            );
        };
    }
    return _cached_decoder_for_InternalTraceInformationElement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalTraceInformationElement */
let _cached_encoder_for_InternalTraceInformationElement: $.ASN1Encoder<InternalTraceInformationElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalTraceInformationElement */

/* START_OF_SYMBOL_DEFINITION _encode_InternalTraceInformationElement */
/**
 * @summary Encodes a(n) InternalTraceInformationElement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalTraceInformationElement, encoded as an ASN.1 Element.
 */
export function _encode_InternalTraceInformationElement(
    value: InternalTraceInformationElement,
    elGetter: $.ASN1Encoder<InternalTraceInformationElement>
) {
    if (!_cached_encoder_for_InternalTraceInformationElement) {
        _cached_encoder_for_InternalTraceInformationElement = function (
            value: InternalTraceInformationElement,
            elGetter: $.ASN1Encoder<InternalTraceInformationElement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GlobalDomainIdentifier(
                            value.global_domain_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MTAName(value.mta_name, $.BER),
                        /* REQUIRED   */ _encode_MTASuppliedInformation(
                            value.mta_supplied_information,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_InternalTraceInformationElement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InternalTraceInformationElement */

/* eslint-enable */
