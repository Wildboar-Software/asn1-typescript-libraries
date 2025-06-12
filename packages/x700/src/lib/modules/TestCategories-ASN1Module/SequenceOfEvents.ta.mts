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
import { CDTC_SIGNAL_TYPE } from '../TestCategories-ASN1Module/CDTC-SIGNAL-TYPE.oca.mjs';
export { CDTC_SIGNAL_TYPE } from '../TestCategories-ASN1Module/CDTC-SIGNAL-TYPE.oca.mjs';
import { SignalTypeSet } from '../TestCategories-ASN1Module/SignalTypeSet.osa.mjs';
export { SignalTypeSet } from '../TestCategories-ASN1Module/SignalTypeSet.osa.mjs';
import {
    SignalDirection,
    _enum_for_SignalDirection,
    SignalDirection_send /* IMPORTED_LONG_ENUMERATION_ITEM */,
    send /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SignalDirection_receive /* IMPORTED_LONG_ENUMERATION_ITEM */,
    receive /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SignalDirection,
    _encode_SignalDirection,
} from '../TestCategories-ASN1Module/SignalDirection.ta.mjs';
export {
    SignalDirection,
    _enum_for_SignalDirection,
    SignalDirection_send /* IMPORTED_LONG_ENUMERATION_ITEM */,
    send /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SignalDirection_receive /* IMPORTED_LONG_ENUMERATION_ITEM */,
    receive /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SignalDirection,
    _encode_SignalDirection,
} from '../TestCategories-ASN1Module/SignalDirection.ta.mjs';
import {
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta.mjs';
export {
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta.mjs';
import {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta.mjs';
export {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta.mjs';
import {
    WaitDuration,
    _decode_WaitDuration,
    _encode_WaitDuration,
} from '../TestCategories-ASN1Module/WaitDuration.ta.mjs';
export {
    WaitDuration,
    _decode_WaitDuration,
    _encode_WaitDuration,
} from '../TestCategories-ASN1Module/WaitDuration.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SequenceOfEvents */
/**
 * @summary SequenceOfEvents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfEvents ::= SEQUENCE {
 *   eventId            INTEGER,
 *   signalType         CDTC-SIGNAL-TYPE.&id({SignalTypeSet}),
 *   signalValue        CDTC-SIGNAL-TYPE.&Value({SignalTypeSet}{@.signalType}),
 *   signalDirection    SignalDirection,
 *   mORTs              MORTs,
 *   associatedObjects  AssociatedObjects,
 *   waitDuration       WaitDuration
 * }
 * ```
 *
 * @class
 */
export class SequenceOfEvents {
    constructor(
        /**
         * @summary `eventId`.
         * @public
         * @readonly
         */
        readonly eventId: INTEGER,
        /**
         * @summary `signalType`.
         * @public
         * @readonly
         */
        readonly signalType: OBJECT_IDENTIFIER,
        /**
         * @summary `signalValue`.
         * @public
         * @readonly
         */
        readonly signalValue: _Element,
        /**
         * @summary `signalDirection`.
         * @public
         * @readonly
         */
        readonly signalDirection: SignalDirection,
        /**
         * @summary `mORTs`.
         * @public
         * @readonly
         */
        readonly mORTs: MORTs,
        /**
         * @summary `associatedObjects`.
         * @public
         * @readonly
         */
        readonly associatedObjects: AssociatedObjects,
        /**
         * @summary `waitDuration`.
         * @public
         * @readonly
         */
        readonly waitDuration: WaitDuration
    ) {}

    /**
     * @summary Restructures an object into a SequenceOfEvents
     * @description
     *
     * This takes an `object` and converts it to a `SequenceOfEvents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SequenceOfEvents`.
     * @returns {SequenceOfEvents}
     */
    public static _from_object(
        _o: { [_K in keyof SequenceOfEvents]: SequenceOfEvents[_K] }
    ): SequenceOfEvents {
        return new SequenceOfEvents(
            _o.eventId,
            _o.signalType,
            _o.signalValue,
            _o.signalDirection,
            _o.mORTs,
            _o.associatedObjects,
            _o.waitDuration
        );
    }

    /**
     * @summary The enum used as the type of the component `signalDirection`
     * @public
     * @static
     */

    public static _enum_for_signalDirection = _enum_for_SignalDirection;
}
/* END_OF_SYMBOL_DEFINITION SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SequenceOfEvents */
/**
 * @summary The Leading Root Component Types of SequenceOfEvents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SequenceOfEvents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'eventId',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signalType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signalValue',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signalDirection',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mORTs',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'associatedObjects',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'waitDuration',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SequenceOfEvents */
/**
 * @summary The Trailing Root Component Types of SequenceOfEvents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SequenceOfEvents: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SequenceOfEvents */
/**
 * @summary The Extension Addition Component Types of SequenceOfEvents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SequenceOfEvents: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfEvents */
let _cached_decoder_for_SequenceOfEvents: $.ASN1Decoder<SequenceOfEvents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfEvents */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfEvents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfEvents} The decoded data structure.
 */
export function _decode_SequenceOfEvents(el: _Element) {
    if (!_cached_decoder_for_SequenceOfEvents) {
        _cached_decoder_for_SequenceOfEvents = function (
            el: _Element
        ): SequenceOfEvents {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 7) {
                throw new _ConstructionError(
                    'SequenceOfEvents contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'eventId';
            sequence[1].name = 'signalType';
            sequence[2].name = 'signalValue';
            sequence[3].name = 'signalDirection';
            sequence[4].name = 'mORTs';
            sequence[5].name = 'associatedObjects';
            sequence[6].name = 'waitDuration';
            let eventId!: INTEGER;
            let signalType!: OBJECT_IDENTIFIER;
            let signalValue!: _Element;
            let signalDirection!: SignalDirection;
            let mORTs!: MORTs;
            let associatedObjects!: AssociatedObjects;
            let waitDuration!: WaitDuration;
            eventId = $._decodeInteger(sequence[0]);
            signalType = $._decodeObjectIdentifier(sequence[1]);
            signalValue = $._decodeAny(sequence[2]);
            signalDirection = _decode_SignalDirection(sequence[3]);
            mORTs = _decode_MORTs(sequence[4]);
            associatedObjects = _decode_AssociatedObjects(sequence[5]);
            waitDuration = _decode_WaitDuration(sequence[6]);
            return new SequenceOfEvents(
                eventId,
                signalType,
                signalValue,
                signalDirection,
                mORTs,
                associatedObjects,
                waitDuration
            );
        };
    }
    return _cached_decoder_for_SequenceOfEvents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfEvents */
let _cached_encoder_for_SequenceOfEvents: $.ASN1Encoder<SequenceOfEvents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfEvents */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfEvents */
/**
 * @summary Encodes a(n) SequenceOfEvents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfEvents, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfEvents(
    value: SequenceOfEvents,
    elGetter: $.ASN1Encoder<SequenceOfEvents>
) {
    if (!_cached_encoder_for_SequenceOfEvents) {
        _cached_encoder_for_SequenceOfEvents = function (
            value: SequenceOfEvents,
            elGetter: $.ASN1Encoder<SequenceOfEvents>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.eventId, $.BER),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.signalType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.signalValue, $.BER),
                        /* REQUIRED   */ _encode_SignalDirection(
                            value.signalDirection,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MORTs(value.mORTs, $.BER),
                        /* REQUIRED   */ _encode_AssociatedObjects(
                            value.associatedObjects,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_WaitDuration(
                            value.waitDuration,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SequenceOfEvents(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfEvents */

/* eslint-enable */
