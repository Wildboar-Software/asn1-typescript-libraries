/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta.mjs';
import {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta.mjs';
/**
 * @summary SignalReceived_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalReceived-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class SignalReceived_Item {
    constructor(
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
        readonly associatedObjects: AssociatedObjects
    ) {}

    /**
     * @summary Restructures an object into a SignalReceived_Item
     * @description
     *
     * This takes an `object` and converts it to a `SignalReceived_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignalReceived_Item`.
     * @returns {SignalReceived_Item}
     */
    public static _from_object(
        _o: { [_K in keyof SignalReceived_Item]: SignalReceived_Item[_K] }
    ): SignalReceived_Item {
        return new SignalReceived_Item(
            _o.signalType,
            _o.signalValue,
            _o.mORTs,
            _o.associatedObjects
        );
    }
}

/**
 * @summary The Leading Root Component Types of SignalReceived_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignalReceived_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'signalType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'signalValue',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'mORTs',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'associatedObjects',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of SignalReceived_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignalReceived_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SignalReceived_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignalReceived_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_SignalReceived_Item: $.ASN1Decoder<SignalReceived_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalReceived_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalReceived_Item} The decoded data structure.
 */
export function _decode_SignalReceived_Item(el: _Element): SignalReceived_Item {
    if (!_cached_decoder_for_SignalReceived_Item) {
        _cached_decoder_for_SignalReceived_Item = function (
            el: _Element
        ): SignalReceived_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'SignalReceived-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'signalType';
            sequence[1].name = 'signalValue';
            sequence[2].name = 'mORTs';
            sequence[3].name = 'associatedObjects';
            let signalType!: OBJECT_IDENTIFIER;
            let signalValue!: _Element;
            let mORTs!: MORTs;
            let associatedObjects!: AssociatedObjects;
            signalType = $._decodeObjectIdentifier(sequence[0]);
            signalValue = $._decodeAny(sequence[1]);
            mORTs = _decode_MORTs(sequence[2]);
            associatedObjects = _decode_AssociatedObjects(sequence[3]);
            return new SignalReceived_Item(
                signalType,
                signalValue,
                mORTs,
                associatedObjects
            );
        };
    }
    return _cached_decoder_for_SignalReceived_Item(el);
}

let _cached_encoder_for_SignalReceived_Item: $.ASN1Encoder<SignalReceived_Item> | null = null;

/**
 * @summary Encodes a(n) SignalReceived_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalReceived_Item, encoded as an ASN.1 Element.
 */
export function _encode_SignalReceived_Item(
    value: SignalReceived_Item,
    elGetter: $.ASN1Encoder<SignalReceived_Item>
): _Element {
    if (!_cached_encoder_for_SignalReceived_Item) {
        _cached_encoder_for_SignalReceived_Item = function (
            value: SignalReceived_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.signalType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.signalValue, $.BER),
                        /* REQUIRED   */ _encode_MORTs(value.mORTs, $.BER),
                        /* REQUIRED   */ _encode_AssociatedObjects(
                            value.associatedObjects,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignalReceived_Item(value, elGetter);
}


/* eslint-enable */
