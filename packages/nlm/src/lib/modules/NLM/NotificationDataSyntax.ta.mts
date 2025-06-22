/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    LogicalChannelId,
    _decode_LogicalChannelId,
    _encode_LogicalChannelId,
} from '../NLM/LogicalChannelId.ta.mjs';

/**
 * @summary NotificationDataSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationDataSyntax ::= SEQUENCE {
 *   channel         [1]  LogicalChannelId OPTIONAL,
 *   packetHeader    [2]  OCTET STRING,
 *   diagnosticCode  [3]  OCTET STRING,
 *   causeCode       [4]  OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class NotificationDataSyntax {
    constructor(
        /**
         * @summary `channel`.
         * @public
         * @readonly
         */
        readonly channel: OPTIONAL<LogicalChannelId>,
        /**
         * @summary `packetHeader`.
         * @public
         * @readonly
         */
        readonly packetHeader: OCTET_STRING,
        /**
         * @summary `diagnosticCode`.
         * @public
         * @readonly
         */
        readonly diagnosticCode: OCTET_STRING,
        /**
         * @summary `causeCode`.
         * @public
         * @readonly
         */
        readonly causeCode: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a NotificationDataSyntax
     * @description
     *
     * This takes an `object` and converts it to a `NotificationDataSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationDataSyntax`.
     * @returns {NotificationDataSyntax}
     */
    public static _from_object(
        _o: { [_K in keyof NotificationDataSyntax]: NotificationDataSyntax[_K] }
    ): NotificationDataSyntax {
        return new NotificationDataSyntax(
            _o.channel,
            _o.packetHeader,
            _o.diagnosticCode,
            _o.causeCode
        );
    }
}


/**
 * @summary The Leading Root Component Types of NotificationDataSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NotificationDataSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'channel',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'packetHeader',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'diagnosticCode',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'causeCode',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of NotificationDataSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotificationDataSyntax: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NotificationDataSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotificationDataSyntax: $.ComponentSpec[] = [];


let _cached_decoder_for_NotificationDataSyntax: $.ASN1Decoder<NotificationDataSyntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NotificationDataSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationDataSyntax} The decoded data structure.
 */
export function _decode_NotificationDataSyntax(el: _Element) {
    if (!_cached_decoder_for_NotificationDataSyntax) {
        _cached_decoder_for_NotificationDataSyntax = function (
            el: _Element
        ): NotificationDataSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let channel: OPTIONAL<LogicalChannelId>;
            let packetHeader!: OCTET_STRING;
            let diagnosticCode!: OCTET_STRING;
            let causeCode!: OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                channel: (_el: _Element): void => {
                    channel = $._decode_implicit<LogicalChannelId>(
                        () => _decode_LogicalChannelId
                    )(_el);
                },
                packetHeader: (_el: _Element): void => {
                    packetHeader = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                diagnosticCode: (_el: _Element): void => {
                    diagnosticCode = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                causeCode: (_el: _Element): void => {
                    causeCode = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NotificationDataSyntax,
                _extension_additions_list_spec_for_NotificationDataSyntax,
                _root_component_type_list_2_spec_for_NotificationDataSyntax,
                undefined
            );
            return new NotificationDataSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                channel,
                packetHeader,
                diagnosticCode,
                causeCode
            );
        };
    }
    return _cached_decoder_for_NotificationDataSyntax(el);
}


let _cached_encoder_for_NotificationDataSyntax: $.ASN1Encoder<NotificationDataSyntax> | null = null;


/**
 * @summary Encodes a(n) NotificationDataSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationDataSyntax, encoded as an ASN.1 Element.
 */
export function _encode_NotificationDataSyntax(
    value: NotificationDataSyntax,
    elGetter: $.ASN1Encoder<NotificationDataSyntax>
) {
    if (!_cached_encoder_for_NotificationDataSyntax) {
        _cached_encoder_for_NotificationDataSyntax = function (
            value: NotificationDataSyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.channel === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_LogicalChannelId,
                                  $.BER
                              )(value.channel, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => $._encodeOctetString,
                            $.BER
                        )(value.packetHeader, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () => $._encodeOctetString,
                            $.BER
                        )(value.diagnosticCode, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            4,
                            () => $._encodeOctetString,
                            $.BER
                        )(value.causeCode, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NotificationDataSyntax(value, elGetter);
}


/* eslint-enable */
