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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary IndividualSwitchOver
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndividualSwitchOver ::= SEQUENCE {
 *   connection   ObjectInstance,
 *   -- crossConnection of connectionProtection (defined in Recommendation G.774.04)
 *   unchangedTP  ObjectInstance,
 *   newTP        ObjectInstance
 *   -- designates the newTP to which the unchanged TP has to be connected with
 * }
 * ```
 *
 * @class
 */
export class IndividualSwitchOver {
    constructor(
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ObjectInstance,
        /**
         * @summary `unchangedTP`.
         * @public
         * @readonly
         */
        readonly unchangedTP: ObjectInstance,
        /**
         * @summary `newTP`.
         * @public
         * @readonly
         */
        readonly newTP: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a IndividualSwitchOver
     * @description
     *
     * This takes an `object` and converts it to a `IndividualSwitchOver`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndividualSwitchOver`.
     * @returns {IndividualSwitchOver}
     */
    public static _from_object(
        _o: { [_K in keyof IndividualSwitchOver]: IndividualSwitchOver[_K] }
    ): IndividualSwitchOver {
        return new IndividualSwitchOver(
            _o.connection,
            _o.unchangedTP,
            _o.newTP
        );
    }
}


/**
 * @summary The Leading Root Component Types of IndividualSwitchOver
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IndividualSwitchOver: $.ComponentSpec[] = [
    new $.ComponentSpec('connection', false, $.hasAnyTag),
    new $.ComponentSpec(
        'unchangedTP',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec('newTP', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of IndividualSwitchOver
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IndividualSwitchOver: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IndividualSwitchOver
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IndividualSwitchOver: $.ComponentSpec[] = [];


let _cached_decoder_for_IndividualSwitchOver: $.ASN1Decoder<IndividualSwitchOver> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IndividualSwitchOver
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndividualSwitchOver} The decoded data structure.
 */
export function _decode_IndividualSwitchOver(el: _Element): IndividualSwitchOver {
    if (!_cached_decoder_for_IndividualSwitchOver) {
        _cached_decoder_for_IndividualSwitchOver = function (
            el: _Element
        ): IndividualSwitchOver {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'IndividualSwitchOver contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'connection';
            sequence[1].name = 'unchangedTP';
            sequence[2].name = 'newTP';
            let connection!: ObjectInstance;
            let unchangedTP!: ObjectInstance;
            let newTP!: ObjectInstance;
            connection = _decode_ObjectInstance(sequence[0]);
            unchangedTP = _decode_ObjectInstance(sequence[1]);
            newTP = _decode_ObjectInstance(sequence[2]);
            return new IndividualSwitchOver(connection, unchangedTP, newTP);
        };
    }
    return _cached_decoder_for_IndividualSwitchOver(el);
}


let _cached_encoder_for_IndividualSwitchOver: $.ASN1Encoder<IndividualSwitchOver> | null = null;


/**
 * @summary Encodes a(n) IndividualSwitchOver into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndividualSwitchOver, encoded as an ASN.1 Element.
 */
export function _encode_IndividualSwitchOver(
    value: IndividualSwitchOver,
    elGetter: $.ASN1Encoder<IndividualSwitchOver>
): _Element {
    if (!_cached_encoder_for_IndividualSwitchOver) {
        _cached_encoder_for_IndividualSwitchOver = function (
            value: IndividualSwitchOver        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.connection,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.unchangedTP,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.newTP,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IndividualSwitchOver(value, elGetter);
}


/* eslint-enable */
