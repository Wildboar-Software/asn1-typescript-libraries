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

/* START_OF_SYMBOL_DEFINITION AlertDestination */
/**
 * @summary AlertDestination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertDestination ::= SEQUENCE {
 *   alert-address    EXTERNAL,
 *   alert-qualifier  OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlertDestination {
    constructor(
        /**
         * @summary `alert_address`.
         * @public
         * @readonly
         */
        readonly alert_address: EXTERNAL,
        /**
         * @summary `alert_qualifier`.
         * @public
         * @readonly
         */
        readonly alert_qualifier: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a AlertDestination
     * @description
     *
     * This takes an `object` and converts it to a `AlertDestination`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlertDestination`.
     * @returns {AlertDestination}
     */
    public static _from_object(
        _o: { [_K in keyof AlertDestination]: AlertDestination[_K] }
    ): AlertDestination {
        return new AlertDestination(_o.alert_address, _o.alert_qualifier);
    }
}
/* END_OF_SYMBOL_DEFINITION AlertDestination */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlertDestination */
/**
 * @summary The Leading Root Component Types of AlertDestination
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlertDestination: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'alert-address',
        false,
        $.hasTag(_TagClass.universal, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'alert-qualifier',
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlertDestination */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlertDestination */
/**
 * @summary The Trailing Root Component Types of AlertDestination
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlertDestination: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlertDestination */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlertDestination */
/**
 * @summary The Extension Addition Component Types of AlertDestination
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlertDestination: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlertDestination */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertDestination */
let _cached_decoder_for_AlertDestination: $.ASN1Decoder<AlertDestination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertDestination */

/* START_OF_SYMBOL_DEFINITION _decode_AlertDestination */
/**
 * @summary Decodes an ASN.1 element into a(n) AlertDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlertDestination} The decoded data structure.
 */
export function _decode_AlertDestination(el: _Element) {
    if (!_cached_decoder_for_AlertDestination) {
        _cached_decoder_for_AlertDestination = function (
            el: _Element
        ): AlertDestination {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let alert_address!: EXTERNAL;
            let alert_qualifier: OPTIONAL<OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'alert-address': (_el: _Element): void => {
                    alert_address = $._decodeExternal(_el);
                },
                'alert-qualifier': (_el: _Element): void => {
                    alert_qualifier = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlertDestination,
                _extension_additions_list_spec_for_AlertDestination,
                _root_component_type_list_2_spec_for_AlertDestination,
                undefined
            );
            return new AlertDestination /* SEQUENCE_CONSTRUCTOR_CALL */(
                alert_address,
                alert_qualifier
            );
        };
    }
    return _cached_decoder_for_AlertDestination(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlertDestination */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertDestination */
let _cached_encoder_for_AlertDestination: $.ASN1Encoder<AlertDestination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertDestination */

/* START_OF_SYMBOL_DEFINITION _encode_AlertDestination */
/**
 * @summary Encodes a(n) AlertDestination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertDestination, encoded as an ASN.1 Element.
 */
export function _encode_AlertDestination(
    value: AlertDestination,
    elGetter: $.ASN1Encoder<AlertDestination>
) {
    if (!_cached_encoder_for_AlertDestination) {
        _cached_encoder_for_AlertDestination = function (
            value: AlertDestination,
            elGetter: $.ASN1Encoder<AlertDestination>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeExternal(
                            value.alert_address,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.alert_qualifier === undefined
                            ? undefined
                            : $._encodeOctetString(
                                  value.alert_qualifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlertDestination(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlertDestination */

/* eslint-enable */
