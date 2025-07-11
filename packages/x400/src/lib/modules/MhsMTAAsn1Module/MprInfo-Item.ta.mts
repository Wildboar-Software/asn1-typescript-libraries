/* eslint-disable */
import {
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
    EMailMpduIdentifier,
    _decode_EMailMpduIdentifier,
    _encode_EMailMpduIdentifier,
} from '../MhsMTAAsn1Module/EMailMpduIdentifier.ta.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
import {
    ProcessingState,
    _decode_ProcessingState,
    _encode_ProcessingState,
} from '../MhsMTAAsn1Module/ProcessingState.ta.mjs';
/**
 * @summary MprInfo_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MprInfo-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class MprInfo_Item {
    constructor(
        /**
         * @summary `mprId`.
         * @public
         * @readonly
         */
        readonly mprId: EMailMpduIdentifier,
        /**
         * @summary `arrivalTime`.
         * @public
         * @readonly
         */
        readonly arrivalTime: Time,
        /**
         * @summary `processingState`.
         * @public
         * @readonly
         */
        readonly processingState: ProcessingState
    ) {}

    /**
     * @summary Restructures an object into a MprInfo_Item
     * @description
     *
     * This takes an `object` and converts it to a `MprInfo_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MprInfo_Item`.
     * @returns {MprInfo_Item}
     */
    public static _from_object(
        _o: { [_K in keyof MprInfo_Item]: MprInfo_Item[_K] }
    ): MprInfo_Item {
        return new MprInfo_Item(_o.mprId, _o.arrivalTime, _o.processingState);
    }
}

/**
 * @summary The Leading Root Component Types of MprInfo_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MprInfo_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('mprId', false, $.hasAnyTag),
    new $.ComponentSpec(
        'arrivalTime',
        false,
        $.hasTag(_TagClass.universal, 23)
    ),
    new $.ComponentSpec(
        'processingState',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of MprInfo_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MprInfo_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MprInfo_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MprInfo_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_MprInfo_Item: $.ASN1Decoder<MprInfo_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MprInfo_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MprInfo_Item} The decoded data structure.
 */
export function _decode_MprInfo_Item(el: _Element): MprInfo_Item {
    if (!_cached_decoder_for_MprInfo_Item) {
        _cached_decoder_for_MprInfo_Item = function (
            el: _Element
        ): MprInfo_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'MprInfo-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mprId';
            sequence[1].name = 'arrivalTime';
            sequence[2].name = 'processingState';
            let mprId!: EMailMpduIdentifier;
            let arrivalTime!: Time;
            let processingState!: ProcessingState;
            mprId = _decode_EMailMpduIdentifier(sequence[0]);
            arrivalTime = _decode_Time(sequence[1]);
            processingState = _decode_ProcessingState(sequence[2]);
            return new MprInfo_Item(mprId, arrivalTime, processingState);
        };
    }
    return _cached_decoder_for_MprInfo_Item(el);
}

let _cached_encoder_for_MprInfo_Item: $.ASN1Encoder<MprInfo_Item> | null = null;

/**
 * @summary Encodes a(n) MprInfo_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MprInfo_Item, encoded as an ASN.1 Element.
 */
export function _encode_MprInfo_Item(
    value: MprInfo_Item,
    elGetter: $.ASN1Encoder<MprInfo_Item>
): _Element {
    if (!_cached_encoder_for_MprInfo_Item) {
        _cached_encoder_for_MprInfo_Item = function (
            value: MprInfo_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EMailMpduIdentifier(
                            value.mprId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time(value.arrivalTime, $.BER),
                        /* REQUIRED   */ _encode_ProcessingState(
                            value.processingState,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MprInfo_Item(value, elGetter);
}


/* eslint-enable */
