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
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
import { AutoActionTable } from '../MSGeneralAutoActionTypes/AutoActionTable.osa.mjs';
export { AutoActionTable } from '../MSGeneralAutoActionTypes/AutoActionTable.osa.mjs';
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from "./AutoActionType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION AutoActionDeregistration */
/**
 * @summary AutoActionDeregistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionDeregistration ::= SEQUENCE {
 *   auto-action-type         AUTO-ACTION.&id({AutoActionTable}),
 *   registration-identifier  [0]  INTEGER(1..ub-per-auto-action) DEFAULT 1
 * }
 * ```
 *
 * @class
 */
export class AutoActionDeregistration {
    constructor(
        /**
         * @summary `auto_action_type`.
         * @public
         * @readonly
         */
        readonly auto_action_type: AutoActionType,
        /**
         * @summary `registration_identifier`.
         * @public
         * @readonly
         */
        readonly registration_identifier: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a AutoActionDeregistration
     * @description
     *
     * This takes an `object` and converts it to a `AutoActionDeregistration`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoActionDeregistration`.
     * @returns {AutoActionDeregistration}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoActionDeregistration]: AutoActionDeregistration[_K];
        }
    ): AutoActionDeregistration {
        return new AutoActionDeregistration(
            _o.auto_action_type,
            _o.registration_identifier
        );
    }

    /**
     * @summary Getter that returns the default value for `registration_identifier`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_registration_identifier() {
        return 1;
    }
}
/* END_OF_SYMBOL_DEFINITION AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoActionDeregistration */
/**
 * @summary The Leading Root Component Types of AutoActionDeregistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoActionDeregistration: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-action-type',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'registration-identifier',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoActionDeregistration */
/**
 * @summary The Trailing Root Component Types of AutoActionDeregistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoActionDeregistration: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoActionDeregistration */
/**
 * @summary The Extension Addition Component Types of AutoActionDeregistration
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoActionDeregistration: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoActionDeregistration */
let _cached_decoder_for_AutoActionDeregistration: $.ASN1Decoder<AutoActionDeregistration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _decode_AutoActionDeregistration */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionDeregistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionDeregistration} The decoded data structure.
 */
export function _decode_AutoActionDeregistration(el: _Element) {
    if (!_cached_decoder_for_AutoActionDeregistration) {
        _cached_decoder_for_AutoActionDeregistration = function (
            el: _Element
        ): AutoActionDeregistration {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let auto_action_type!: AutoActionType;
            let registration_identifier: OPTIONAL<INTEGER> =
                AutoActionDeregistration._default_value_for_registration_identifier;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'auto-action-type': (_el: _Element): void => {
                    auto_action_type = _decode_AutoActionType(_el);
                },
                'registration-identifier': (_el: _Element): void => {
                    registration_identifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoActionDeregistration,
                _extension_additions_list_spec_for_AutoActionDeregistration,
                _root_component_type_list_2_spec_for_AutoActionDeregistration,
                undefined
            );
            return new AutoActionDeregistration /* SEQUENCE_CONSTRUCTOR_CALL */(
                auto_action_type,
                registration_identifier
            );
        };
    }
    return _cached_decoder_for_AutoActionDeregistration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoActionDeregistration */
let _cached_encoder_for_AutoActionDeregistration: $.ASN1Encoder<AutoActionDeregistration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoActionDeregistration */

/* START_OF_SYMBOL_DEFINITION _encode_AutoActionDeregistration */
/**
 * @summary Encodes a(n) AutoActionDeregistration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionDeregistration, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionDeregistration(
    value: AutoActionDeregistration,
    elGetter: $.ASN1Encoder<AutoActionDeregistration>
) {
    if (!_cached_encoder_for_AutoActionDeregistration) {
        _cached_encoder_for_AutoActionDeregistration = function (
            value: AutoActionDeregistration,
            elGetter: $.ASN1Encoder<AutoActionDeregistration>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AutoActionType(
                            value.auto_action_type,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.registration_identifier ===
                            undefined ||
                        $.deepEq(
                            value.registration_identifier,
                            AutoActionDeregistration._default_value_for_registration_identifier
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.registration_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoActionDeregistration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoActionDeregistration */

/* eslint-enable */
