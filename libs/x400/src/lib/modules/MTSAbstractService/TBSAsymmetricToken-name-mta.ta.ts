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

/* START_OF_SYMBOL_DEFINITION TBSAsymmetricToken_name_mta */
/**
 * @summary TBSAsymmetricToken_name_mta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAsymmetricToken-name-mta ::= SEQUENCE {
 *     global-domain-identifier    GlobalDomainIdentifier OPTIONAL,
 *     mta-name                    MTAName }
 * ```
 *
 * @class
 */
export class TBSAsymmetricToken_name_mta {
    constructor(
        /**
         * @summary `global_domain_identifier`.
         * @public
         * @readonly
         */
        readonly global_domain_identifier: OPTIONAL<GlobalDomainIdentifier>,
        /**
         * @summary `mta_name`.
         * @public
         * @readonly
         */
        readonly mta_name: MTAName
    ) {}

    /**
     * @summary Restructures an object into a TBSAsymmetricToken_name_mta
     * @description
     *
     * This takes an `object` and converts it to a `TBSAsymmetricToken_name_mta`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSAsymmetricToken_name_mta`.
     * @returns {TBSAsymmetricToken_name_mta}
     */
    public static _from_object(
        _o: {
            [_K in keyof TBSAsymmetricToken_name_mta]: TBSAsymmetricToken_name_mta[_K];
        }
    ): TBSAsymmetricToken_name_mta {
        return new TBSAsymmetricToken_name_mta(
            _o.global_domain_identifier,
            _o.mta_name
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSAsymmetricToken_name_mta */
/**
 * @summary The Leading Root Component Types of TBSAsymmetricToken_name_mta
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSAsymmetricToken_name_mta: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'global-domain-identifier',
        true,
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSAsymmetricToken_name_mta */
/**
 * @summary The Trailing Root Component Types of TBSAsymmetricToken_name_mta
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSAsymmetricToken_name_mta: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSAsymmetricToken_name_mta */
/**
 * @summary The Extension Addition Component Types of TBSAsymmetricToken_name_mta
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSAsymmetricToken_name_mta: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSAsymmetricToken_name_mta */
let _cached_decoder_for_TBSAsymmetricToken_name_mta: $.ASN1Decoder<TBSAsymmetricToken_name_mta> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _decode_TBSAsymmetricToken_name_mta */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSAsymmetricToken_name_mta
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAsymmetricToken_name_mta} The decoded data structure.
 */
export function _decode_TBSAsymmetricToken_name_mta(el: _Element) {
    if (!_cached_decoder_for_TBSAsymmetricToken_name_mta) {
        _cached_decoder_for_TBSAsymmetricToken_name_mta = function (
            el: _Element
        ): TBSAsymmetricToken_name_mta {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let global_domain_identifier: OPTIONAL<GlobalDomainIdentifier>;
            let mta_name!: MTAName;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'global-domain-identifier': (_el: _Element): void => {
                    global_domain_identifier = _decode_GlobalDomainIdentifier(
                        _el
                    );
                },
                'mta-name': (_el: _Element): void => {
                    mta_name = _decode_MTAName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSAsymmetricToken_name_mta,
                _extension_additions_list_spec_for_TBSAsymmetricToken_name_mta,
                _root_component_type_list_2_spec_for_TBSAsymmetricToken_name_mta,
                undefined
            );
            return new TBSAsymmetricToken_name_mta /* SEQUENCE_CONSTRUCTOR_CALL */(
                global_domain_identifier,
                mta_name
            );
        };
    }
    return _cached_decoder_for_TBSAsymmetricToken_name_mta(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSAsymmetricToken_name_mta */
let _cached_encoder_for_TBSAsymmetricToken_name_mta: $.ASN1Encoder<TBSAsymmetricToken_name_mta> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSAsymmetricToken_name_mta */

/* START_OF_SYMBOL_DEFINITION _encode_TBSAsymmetricToken_name_mta */
/**
 * @summary Encodes a(n) TBSAsymmetricToken_name_mta into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAsymmetricToken_name_mta, encoded as an ASN.1 Element.
 */
export function _encode_TBSAsymmetricToken_name_mta(
    value: TBSAsymmetricToken_name_mta,
    elGetter: $.ASN1Encoder<TBSAsymmetricToken_name_mta>
) {
    if (!_cached_encoder_for_TBSAsymmetricToken_name_mta) {
        _cached_encoder_for_TBSAsymmetricToken_name_mta = function (
            value: TBSAsymmetricToken_name_mta,
            elGetter: $.ASN1Encoder<TBSAsymmetricToken_name_mta>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.global_domain_identifier ===
                        undefined
                            ? undefined
                            : _encode_GlobalDomainIdentifier(
                                  value.global_domain_identifier,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_MTAName(value.mta_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSAsymmetricToken_name_mta(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSAsymmetricToken_name_mta */

/* eslint-enable */
