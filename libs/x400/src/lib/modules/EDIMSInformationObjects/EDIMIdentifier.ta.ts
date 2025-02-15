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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta';
import {
    LocalReference,
    _decode_LocalReference,
    _encode_LocalReference,
} from '../EDIMSInformationObjects/LocalReference.ta';
export {
    LocalReference,
    _decode_LocalReference,
    _encode_LocalReference,
} from '../EDIMSInformationObjects/LocalReference.ta';

/* START_OF_SYMBOL_DEFINITION EDIMIdentifier */
/**
 * @summary EDIMIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMIdentifier ::= SET {
 *   user                      [0]  ORName,
 *   user-relative-identifier  [1]  LocalReference
 * }
 * ```
 *
 * @class
 */
export class EDIMIdentifier {
    constructor(
        /**
         * @summary `user`.
         * @public
         * @readonly
         */
        readonly user: ORName,
        /**
         * @summary `user_relative_identifier`.
         * @public
         * @readonly
         */
        readonly user_relative_identifier: LocalReference
    ) {}

    /**
     * @summary Restructures an object into a EDIMIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `EDIMIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIMIdentifier`.
     * @returns {EDIMIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof EDIMIdentifier]: EDIMIdentifier[_K] }
    ): EDIMIdentifier {
        return new EDIMIdentifier(_o.user, _o.user_relative_identifier);
    }
}
/* END_OF_SYMBOL_DEFINITION EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIMIdentifier */
/**
 * @summary The Leading Root Component Types of EDIMIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIMIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'user-relative-identifier',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIMIdentifier */
/**
 * @summary The Trailing Root Component Types of EDIMIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIMIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIMIdentifier */
/**
 * @summary The Extension Addition Component Types of EDIMIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIMIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMIdentifier */
let _cached_decoder_for_EDIMIdentifier: $.ASN1Decoder<EDIMIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_EDIMIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIMIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMIdentifier} The decoded data structure.
 */
export function _decode_EDIMIdentifier(el: _Element) {
    if (!_cached_decoder_for_EDIMIdentifier) {
        _cached_decoder_for_EDIMIdentifier = function (
            el: _Element
        ): EDIMIdentifier {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let user!: ORName;
            let user_relative_identifier!: LocalReference;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                user: (_el: _Element): void => {
                    user = $._decode_implicit<ORName>(() => _decode_ORName)(
                        _el
                    );
                },
                'user-relative-identifier': (_el: _Element): void => {
                    user_relative_identifier = $._decode_implicit<LocalReference>(
                        () => _decode_LocalReference
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIMIdentifier,
                _extension_additions_list_spec_for_EDIMIdentifier,
                _root_component_type_list_2_spec_for_EDIMIdentifier,
                undefined
            );
            return new EDIMIdentifier /* SET_CONSTRUCTOR_CALL */(
                user,
                user_relative_identifier
            );
        };
    }
    return _cached_decoder_for_EDIMIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMIdentifier */
let _cached_encoder_for_EDIMIdentifier: $.ASN1Encoder<EDIMIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_EDIMIdentifier */
/**
 * @summary Encodes a(n) EDIMIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_EDIMIdentifier(
    value: EDIMIdentifier,
    elGetter: $.ASN1Encoder<EDIMIdentifier>
) {
    if (!_cached_encoder_for_EDIMIdentifier) {
        _cached_encoder_for_EDIMIdentifier = function (
            value: EDIMIdentifier,
            elGetter: $.ASN1Encoder<EDIMIdentifier>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ORName,
                            $.BER
                        )(value.user, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_LocalReference,
                            $.BER
                        )(value.user_relative_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIMIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIMIdentifier */

/* eslint-enable */
