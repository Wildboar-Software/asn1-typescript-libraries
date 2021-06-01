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
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../EDIMSInformationObjects/MessageParameters.ta';
export {
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../EDIMSInformationObjects/MessageParameters.ta';
import {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../EDIMSInformationObjects/MessageData.ta';
export {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../EDIMSInformationObjects/MessageData.ta';

/* START_OF_SYMBOL_DEFINITION EDIMBodyPart */
/**
 * @summary EDIMBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMBodyPart ::= SEQUENCE {
 *   parameters  [0]  MessageParameters OPTIONAL,
 *   data        [1]  MessageData
 * }
 * ```
 *
 * @class
 */
export class EDIMBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<MessageParameters>,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: MessageData
    ) {}

    /**
     * @summary Restructures an object into a EDIMBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `EDIMBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIMBodyPart`.
     * @returns {EDIMBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof EDIMBodyPart]: EDIMBodyPart[_K] }
    ): EDIMBodyPart {
        return new EDIMBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIMBodyPart */
/**
 * @summary The Leading Root Component Types of EDIMBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIMBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIMBodyPart */
/**
 * @summary The Trailing Root Component Types of EDIMBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIMBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIMBodyPart */
/**
 * @summary The Extension Addition Component Types of EDIMBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIMBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMBodyPart */
let _cached_decoder_for_EDIMBodyPart: $.ASN1Decoder<EDIMBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_EDIMBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIMBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMBodyPart} The decoded data structure.
 */
export function _decode_EDIMBodyPart(el: _Element) {
    if (!_cached_decoder_for_EDIMBodyPart) {
        _cached_decoder_for_EDIMBodyPart = function (
            el: _Element
        ): EDIMBodyPart {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let parameters: OPTIONAL<MessageParameters>;
            let data!: MessageData;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                parameters: (_el: _Element): void => {
                    parameters = $._decode_implicit<MessageParameters>(
                        () => _decode_MessageParameters
                    )(_el);
                },
                data: (_el: _Element): void => {
                    data = $._decode_implicit<MessageData>(
                        () => _decode_MessageData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIMBodyPart,
                _extension_additions_list_spec_for_EDIMBodyPart,
                _root_component_type_list_2_spec_for_EDIMBodyPart,
                undefined
            );
            return new EDIMBodyPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                parameters,
                data
            );
        };
    }
    return _cached_decoder_for_EDIMBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMBodyPart */
let _cached_encoder_for_EDIMBodyPart: $.ASN1Encoder<EDIMBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_EDIMBodyPart */
/**
 * @summary Encodes a(n) EDIMBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_EDIMBodyPart(
    value: EDIMBodyPart,
    elGetter: $.ASN1Encoder<EDIMBodyPart>
) {
    if (!_cached_encoder_for_EDIMBodyPart) {
        _cached_encoder_for_EDIMBodyPart = function (
            value: EDIMBodyPart,
            elGetter: $.ASN1Encoder<EDIMBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_MessageParameters,
                                  $.BER
                              )(value.parameters, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_MessageData,
                            $.BER
                        )(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIMBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIMBodyPart */

/* eslint-enable */
