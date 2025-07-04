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
 * @summary AddNWTTPsToAccessGroupResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddNWTTPsToAccessGroupResult ::= SEQUENCE {
 *   accessGroup  ObjectInstance,
 *   addedNWTTPs  SET OF ObjectInstance
 * }
 * ```
 *
 */
export class AddNWTTPsToAccessGroupResult {
    constructor(
        /**
         * @summary `accessGroup`.
         * @public
         * @readonly
         */
        readonly accessGroup: ObjectInstance,
        /**
         * @summary `addedNWTTPs`.
         * @public
         * @readonly
         */
        readonly addedNWTTPs: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a AddNWTTPsToAccessGroupResult
     * @description
     *
     * This takes an `object` and converts it to a `AddNWTTPsToAccessGroupResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddNWTTPsToAccessGroupResult`.
     * @returns {AddNWTTPsToAccessGroupResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddNWTTPsToAccessGroupResult]: AddNWTTPsToAccessGroupResult[_K];
        }
    ): AddNWTTPsToAccessGroupResult {
        return new AddNWTTPsToAccessGroupResult(_o.accessGroup, _o.addedNWTTPs);
    }
}


/**
 * @summary The Leading Root Component Types of AddNWTTPsToAccessGroupResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'accessGroup',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'addedNWTTPs',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of AddNWTTPsToAccessGroupResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddNWTTPsToAccessGroupResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddNWTTPsToAccessGroupResult: $.ComponentSpec[] = [];


let _cached_decoder_for_AddNWTTPsToAccessGroupResult: $.ASN1Decoder<AddNWTTPsToAccessGroupResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddNWTTPsToAccessGroupResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddNWTTPsToAccessGroupResult} The decoded data structure.
 */
export function _decode_AddNWTTPsToAccessGroupResult(el: _Element): AddNWTTPsToAccessGroupResult {
    if (!_cached_decoder_for_AddNWTTPsToAccessGroupResult) {
        _cached_decoder_for_AddNWTTPsToAccessGroupResult = function (
            el: _Element
        ): AddNWTTPsToAccessGroupResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AddNWTTPsToAccessGroupResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'accessGroup';
            sequence[1].name = 'addedNWTTPs';
            let accessGroup!: ObjectInstance;
            let addedNWTTPs!: ObjectInstance[];
            accessGroup = _decode_ObjectInstance(sequence[0]);
            addedNWTTPs = $._decodeSetOf<ObjectInstance>(
                () => _decode_ObjectInstance
            )(sequence[1]);
            return new AddNWTTPsToAccessGroupResult(accessGroup, addedNWTTPs);
        };
    }
    return _cached_decoder_for_AddNWTTPsToAccessGroupResult(el);
}


let _cached_encoder_for_AddNWTTPsToAccessGroupResult: $.ASN1Encoder<AddNWTTPsToAccessGroupResult> | null = null;


/**
 * @summary Encodes a(n) AddNWTTPsToAccessGroupResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddNWTTPsToAccessGroupResult, encoded as an ASN.1 Element.
 */
export function _encode_AddNWTTPsToAccessGroupResult(
    value: AddNWTTPsToAccessGroupResult,
    elGetter: $.ASN1Encoder<AddNWTTPsToAccessGroupResult>
): _Element {
    if (!_cached_encoder_for_AddNWTTPsToAccessGroupResult) {
        _cached_encoder_for_AddNWTTPsToAccessGroupResult = function (
            value: AddNWTTPsToAccessGroupResult        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.accessGroup,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.addedNWTTPs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddNWTTPsToAccessGroupResult(value, elGetter);
}


/* eslint-enable */
