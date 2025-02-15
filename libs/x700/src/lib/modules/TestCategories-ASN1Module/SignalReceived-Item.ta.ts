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
import { CDTC_SIGNAL_TYPE } from '../TestCategories-ASN1Module/CDTC-SIGNAL-TYPE.oca';
export { CDTC_SIGNAL_TYPE } from '../TestCategories-ASN1Module/CDTC-SIGNAL-TYPE.oca';
import { SignalTypeSet } from '../TestCategories-ASN1Module/SignalTypeSet.osa';
export { SignalTypeSet } from '../TestCategories-ASN1Module/SignalTypeSet.osa';
import {
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta';
export {
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta';
import {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta';
export {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta';

/* START_OF_SYMBOL_DEFINITION SignalReceived_Item */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignalReceived_Item */
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignalReceived_Item */
/**
 * @summary The Trailing Root Component Types of SignalReceived_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignalReceived_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignalReceived_Item */
/**
 * @summary The Extension Addition Component Types of SignalReceived_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignalReceived_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalReceived_Item */
let _cached_decoder_for_SignalReceived_Item: $.ASN1Decoder<SignalReceived_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SignalReceived_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SignalReceived_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalReceived_Item} The decoded data structure.
 */
export function _decode_SignalReceived_Item(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalReceived_Item */
let _cached_encoder_for_SignalReceived_Item: $.ASN1Encoder<SignalReceived_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalReceived_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SignalReceived_Item */
/**
 * @summary Encodes a(n) SignalReceived_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalReceived_Item, encoded as an ASN.1 Element.
 */
export function _encode_SignalReceived_Item(
    value: SignalReceived_Item,
    elGetter: $.ASN1Encoder<SignalReceived_Item>
) {
    if (!_cached_encoder_for_SignalReceived_Item) {
        _cached_encoder_for_SignalReceived_Item = function (
            value: SignalReceived_Item,
            elGetter: $.ASN1Encoder<SignalReceived_Item>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_SignalReceived_Item */

/* eslint-enable */
