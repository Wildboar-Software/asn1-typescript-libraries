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
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AliasRedirection */
/**
 * @summary AliasRedirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AliasRedirection ::= SEQUENCE {
 *   redirection-address  [0]  ORAddress,
 *   edit                 [1]  BOOLEAN DEFAULT TRUE
 * }
 * ```
 *
 * @class
 */
export class AliasRedirection {
    constructor(
        /**
         * @summary `redirection_address`.
         * @public
         * @readonly
         */
        readonly redirection_address: ORAddress,
        /**
         * @summary `edit`.
         * @public
         * @readonly
         */
        readonly edit: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AliasRedirection
     * @description
     *
     * This takes an `object` and converts it to a `AliasRedirection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AliasRedirection`.
     * @returns {AliasRedirection}
     */
    public static _from_object(
        _o: { [_K in keyof AliasRedirection]: AliasRedirection[_K] }
    ): AliasRedirection {
        return new AliasRedirection(_o.redirection_address, _o.edit);
    }

    /**
     * @summary Getter that returns the default value for `edit`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_edit(): BOOLEAN {
        return true;
    }
}
/* END_OF_SYMBOL_DEFINITION AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AliasRedirection */
/**
 * @summary The Leading Root Component Types of AliasRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AliasRedirection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'redirection-address',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'edit',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AliasRedirection */
/**
 * @summary The Trailing Root Component Types of AliasRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AliasRedirection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AliasRedirection */
/**
 * @summary The Extension Addition Component Types of AliasRedirection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AliasRedirection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AliasRedirection */
let _cached_decoder_for_AliasRedirection: $.ASN1Decoder<AliasRedirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _decode_AliasRedirection */
/**
 * @summary Decodes an ASN.1 element into a(n) AliasRedirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AliasRedirection} The decoded data structure.
 */
export function _decode_AliasRedirection(el: _Element) {
    if (!_cached_decoder_for_AliasRedirection) {
        _cached_decoder_for_AliasRedirection = function (
            el: _Element
        ): AliasRedirection {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let redirection_address!: ORAddress;
            let edit: OPTIONAL<BOOLEAN> =
                AliasRedirection._default_value_for_edit;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'redirection-address': (_el: _Element): void => {
                    redirection_address = $._decode_implicit<ORAddress>(
                        () => _decode_ORAddress
                    )(_el);
                },
                edit: (_el: _Element): void => {
                    edit = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AliasRedirection,
                _extension_additions_list_spec_for_AliasRedirection,
                _root_component_type_list_2_spec_for_AliasRedirection,
                undefined
            );
            return new AliasRedirection /* SEQUENCE_CONSTRUCTOR_CALL */(
                redirection_address,
                edit
            );
        };
    }
    return _cached_decoder_for_AliasRedirection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AliasRedirection */
let _cached_encoder_for_AliasRedirection: $.ASN1Encoder<AliasRedirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AliasRedirection */

/* START_OF_SYMBOL_DEFINITION _encode_AliasRedirection */
/**
 * @summary Encodes a(n) AliasRedirection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AliasRedirection, encoded as an ASN.1 Element.
 */
export function _encode_AliasRedirection(
    value: AliasRedirection,
    elGetter: $.ASN1Encoder<AliasRedirection>
) {
    if (!_cached_encoder_for_AliasRedirection) {
        _cached_encoder_for_AliasRedirection = function (
            value: AliasRedirection,
            elGetter: $.ASN1Encoder<AliasRedirection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ORAddress,
                            $.BER
                        )(value.redirection_address, $.BER),
                        /* IF_DEFAULT */ value.edit === undefined ||
                        $.deepEq(
                            value.edit,
                            AliasRedirection._default_value_for_edit
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.edit, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AliasRedirection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AliasRedirection */

/* eslint-enable */
