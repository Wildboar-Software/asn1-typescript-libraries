/* eslint-disable */
import {
    BOOLEAN,
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
} from '@wildboar/cmip';
/**
 * @summary BackupResult_local
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupResult-local ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class BackupResult_local {
    constructor(
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: ObjectInstance,
        /**
         * @summary `success`.
         * @public
         * @readonly
         */
        readonly success: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a BackupResult_local
     * @description
     *
     * This takes an `object` and converts it to a `BackupResult_local`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackupResult_local`.
     * @returns {BackupResult_local}
     */
    public static _from_object(
        _o: { [_K in keyof BackupResult_local]: BackupResult_local[_K] }
    ): BackupResult_local {
        return new BackupResult_local(_o.destination, _o.success);
    }
}

/**
 * @summary The Leading Root Component Types of BackupResult_local
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BackupResult_local: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'destination',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'success',
        false,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of BackupResult_local
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackupResult_local: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BackupResult_local
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackupResult_local: $.ComponentSpec[] = [];

let _cached_decoder_for_BackupResult_local: $.ASN1Decoder<BackupResult_local> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackupResult_local
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupResult_local} The decoded data structure.
 */
export function _decode_BackupResult_local(el: _Element): BackupResult_local {
    if (!_cached_decoder_for_BackupResult_local) {
        _cached_decoder_for_BackupResult_local = function (
            el: _Element
        ): BackupResult_local {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BackupResult-local contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'destination';
            sequence[1].name = 'success';
            let destination!: ObjectInstance;
            let success!: BOOLEAN;
            destination = _decode_ObjectInstance(sequence[0]);
            success = $._decodeBoolean(sequence[1]);
            return new BackupResult_local(destination, success);
        };
    }
    return _cached_decoder_for_BackupResult_local(el);
}

let _cached_encoder_for_BackupResult_local: $.ASN1Encoder<BackupResult_local> | null = null;

/**
 * @summary Encodes a(n) BackupResult_local into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupResult_local, encoded as an ASN.1 Element.
 */
export function _encode_BackupResult_local(
    value: BackupResult_local,
    elGetter: $.ASN1Encoder<BackupResult_local>
): _Element {
    if (!_cached_encoder_for_BackupResult_local) {
        _cached_encoder_for_BackupResult_local = function (
            value: BackupResult_local        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.destination,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBoolean(value.success, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BackupResult_local(value, elGetter);
}


/* eslint-enable */
