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
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta';
export {
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta';

/* START_OF_SYMBOL_DEFINITION ChangeCredentialsArgument */
/**
 * @summary ChangeCredentialsArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeCredentialsArgument ::= SET {
 *   old-credentials  [0]  Credentials(WITH COMPONENTS {
 *                                       simple
 *                                     }),
 *   new-credentials  [1]  Credentials(WITH COMPONENTS {
 *                                       simple
 *                                     })
 * }
 * ```
 *
 * @class
 */
export class ChangeCredentialsArgument {
    constructor(
        /**
         * @summary `old_credentials`.
         * @public
         * @readonly
         */
        readonly old_credentials: Credentials,
        /**
         * @summary `new_credentials`.
         * @public
         * @readonly
         */
        readonly new_credentials: Credentials
    ) {}

    /**
     * @summary Restructures an object into a ChangeCredentialsArgument
     * @description
     *
     * This takes an `object` and converts it to a `ChangeCredentialsArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeCredentialsArgument`.
     * @returns {ChangeCredentialsArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof ChangeCredentialsArgument]: ChangeCredentialsArgument[_K];
        }
    ): ChangeCredentialsArgument {
        return new ChangeCredentialsArgument(
            _o.old_credentials,
            _o.new_credentials
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChangeCredentialsArgument */
/**
 * @summary The Leading Root Component Types of ChangeCredentialsArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChangeCredentialsArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'old-credentials',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'new-credentials',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChangeCredentialsArgument */
/**
 * @summary The Trailing Root Component Types of ChangeCredentialsArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChangeCredentialsArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChangeCredentialsArgument */
/**
 * @summary The Extension Addition Component Types of ChangeCredentialsArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChangeCredentialsArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeCredentialsArgument */
let _cached_decoder_for_ChangeCredentialsArgument: $.ASN1Decoder<ChangeCredentialsArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ChangeCredentialsArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ChangeCredentialsArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeCredentialsArgument} The decoded data structure.
 */
export function _decode_ChangeCredentialsArgument(el: _Element) {
    if (!_cached_decoder_for_ChangeCredentialsArgument) {
        _cached_decoder_for_ChangeCredentialsArgument = function (
            el: _Element
        ): ChangeCredentialsArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let old_credentials!: Credentials;
            let new_credentials!: Credentials;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'old-credentials': (_el: _Element): void => {
                    old_credentials = $._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
                'new-credentials': (_el: _Element): void => {
                    new_credentials = $._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChangeCredentialsArgument,
                _extension_additions_list_spec_for_ChangeCredentialsArgument,
                _root_component_type_list_2_spec_for_ChangeCredentialsArgument,
                undefined
            );
            return new ChangeCredentialsArgument /* SET_CONSTRUCTOR_CALL */(
                old_credentials,
                new_credentials
            );
        };
    }
    return _cached_decoder_for_ChangeCredentialsArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeCredentialsArgument */
let _cached_encoder_for_ChangeCredentialsArgument: $.ASN1Encoder<ChangeCredentialsArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeCredentialsArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ChangeCredentialsArgument */
/**
 * @summary Encodes a(n) ChangeCredentialsArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeCredentialsArgument, encoded as an ASN.1 Element.
 */
export function _encode_ChangeCredentialsArgument(
    value: ChangeCredentialsArgument,
    elGetter: $.ASN1Encoder<ChangeCredentialsArgument>
) {
    if (!_cached_encoder_for_ChangeCredentialsArgument) {
        _cached_encoder_for_ChangeCredentialsArgument = function (
            value: ChangeCredentialsArgument,
            elGetter: $.ASN1Encoder<ChangeCredentialsArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Credentials,
                            $.BER
                        )(value.old_credentials, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Credentials,
                            $.BER
                        )(value.new_credentials, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ChangeCredentialsArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChangeCredentialsArgument */

/* eslint-enable */
