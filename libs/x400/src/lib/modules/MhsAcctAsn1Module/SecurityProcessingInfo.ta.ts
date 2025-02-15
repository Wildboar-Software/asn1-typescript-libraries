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
    SecurityAction,
    SecurityAction_unspecified /* IMPORTED_LONG_NAMED_BIT */,
    unspecified /* IMPORTED_SHORT_NAMED_BIT */,
    SecurityAction_origin_authentication /* IMPORTED_LONG_NAMED_BIT */,
    origin_authentication /* IMPORTED_SHORT_NAMED_BIT */,
    SecurityAction_security_label_check /* IMPORTED_LONG_NAMED_BIT */,
    security_label_check /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_SecurityAction,
    _encode_SecurityAction,
} from '../MhsAcctAsn1Module/SecurityAction.ta';
export {
    SecurityAction,
    SecurityAction_unspecified /* IMPORTED_LONG_NAMED_BIT */,
    unspecified /* IMPORTED_SHORT_NAMED_BIT */,
    SecurityAction_origin_authentication /* IMPORTED_LONG_NAMED_BIT */,
    origin_authentication /* IMPORTED_SHORT_NAMED_BIT */,
    SecurityAction_security_label_check /* IMPORTED_LONG_NAMED_BIT */,
    security_label_check /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_SecurityAction,
    _encode_SecurityAction,
} from '../MhsAcctAsn1Module/SecurityAction.ta';

/* START_OF_SYMBOL_DEFINITION SecurityProcessingInfo */
/**
 * @summary SecurityProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProcessingInfo ::= SET {
 *   action           [0]  SecurityAction,
 *   security-policy  [1]  OBJECT IDENTIFIER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SecurityProcessingInfo {
    constructor(
        /**
         * @summary `action`.
         * @public
         * @readonly
         */
        readonly action: SecurityAction,
        /**
         * @summary `security_policy`.
         * @public
         * @readonly
         */
        readonly security_policy: OPTIONAL<OBJECT_IDENTIFIER>
    ) {}

    /**
     * @summary Restructures an object into a SecurityProcessingInfo
     * @description
     *
     * This takes an `object` and converts it to a `SecurityProcessingInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityProcessingInfo`.
     * @returns {SecurityProcessingInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityProcessingInfo]: SecurityProcessingInfo[_K] }
    ): SecurityProcessingInfo {
        return new SecurityProcessingInfo(_o.action, _o.security_policy);
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityProcessingInfo */
/**
 * @summary The Leading Root Component Types of SecurityProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityProcessingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'action',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-policy',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityProcessingInfo */
/**
 * @summary The Trailing Root Component Types of SecurityProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityProcessingInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityProcessingInfo */
/**
 * @summary The Extension Addition Component Types of SecurityProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityProcessingInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProcessingInfo */
let _cached_decoder_for_SecurityProcessingInfo: $.ASN1Decoder<SecurityProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityProcessingInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityProcessingInfo} The decoded data structure.
 */
export function _decode_SecurityProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_SecurityProcessingInfo) {
        _cached_decoder_for_SecurityProcessingInfo = function (
            el: _Element
        ): SecurityProcessingInfo {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let action!: SecurityAction;
            let security_policy: OPTIONAL<OBJECT_IDENTIFIER>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                action: (_el: _Element): void => {
                    action = $._decode_implicit<SecurityAction>(
                        () => _decode_SecurityAction
                    )(_el);
                },
                'security-policy': (_el: _Element): void => {
                    security_policy = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityProcessingInfo,
                _extension_additions_list_spec_for_SecurityProcessingInfo,
                _root_component_type_list_2_spec_for_SecurityProcessingInfo,
                undefined
            );
            return new SecurityProcessingInfo /* SET_CONSTRUCTOR_CALL */(
                action,
                security_policy
            );
        };
    }
    return _cached_decoder_for_SecurityProcessingInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProcessingInfo */
let _cached_encoder_for_SecurityProcessingInfo: $.ASN1Encoder<SecurityProcessingInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProcessingInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityProcessingInfo */
/**
 * @summary Encodes a(n) SecurityProcessingInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_SecurityProcessingInfo(
    value: SecurityProcessingInfo,
    elGetter: $.ASN1Encoder<SecurityProcessingInfo>
) {
    if (!_cached_encoder_for_SecurityProcessingInfo) {
        _cached_encoder_for_SecurityProcessingInfo = function (
            value: SecurityProcessingInfo,
            elGetter: $.ASN1Encoder<SecurityProcessingInfo>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_SecurityAction,
                            $.BER
                        )(value.action, $.BER),
                        /* IF_ABSENT  */ value.security_policy === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.security_policy, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SecurityProcessingInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityProcessingInfo */

/* eslint-enable */
