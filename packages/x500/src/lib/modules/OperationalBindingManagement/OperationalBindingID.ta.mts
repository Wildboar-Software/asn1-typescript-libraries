/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OperationalBindingID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationalBindingID ::= SEQUENCE {
 *   identifier  INTEGER,
 *   version     INTEGER,
 *   ... }
 * ```
 *
 */
export class OperationalBindingID {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: INTEGER,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OperationalBindingID
     * @description
     *
     * This takes an `object` and converts it to a `OperationalBindingID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperationalBindingID`.
     * @returns {OperationalBindingID}
     */
    public static _from_object(
        _o: { [_K in keyof OperationalBindingID]: OperationalBindingID[_K] }
    ): OperationalBindingID {
        return new OperationalBindingID(
            _o.identifier,
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of OperationalBindingID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OperationalBindingID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of OperationalBindingID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OperationalBindingID: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OperationalBindingID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OperationalBindingID: $.ComponentSpec[] = [];

let _cached_decoder_for_OperationalBindingID: $.ASN1Decoder<OperationalBindingID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationalBindingID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationalBindingID} The decoded data structure.
 */
export function _decode_OperationalBindingID(el: _Element): OperationalBindingID {
    if (!_cached_decoder_for_OperationalBindingID) {
        _cached_decoder_for_OperationalBindingID = function (
            el: _Element
        ): OperationalBindingID {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OperationalBindingID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "identifier";
            sequence[1].name = "version";
            let identifier!: INTEGER;
            let version!: INTEGER;
            identifier = $._decodeInteger(sequence[0]);
            version = $._decodeInteger(sequence[1]);
            return new OperationalBindingID(
                identifier,
                version,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_OperationalBindingID(el);
}

let _cached_encoder_for_OperationalBindingID: $.ASN1Encoder<OperationalBindingID> | null = null;

/**
 * @summary Encodes a(n) OperationalBindingID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationalBindingID, encoded as an ASN.1 Element.
 */
export function _encode_OperationalBindingID(
    value: OperationalBindingID,
    elGetter: $.ASN1Encoder<OperationalBindingID>
): _Element {
    if (!_cached_encoder_for_OperationalBindingID) {
        _cached_encoder_for_OperationalBindingID = function (
            value: OperationalBindingID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.identifier,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.version,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OperationalBindingID(value, elGetter);
}


/* eslint-enable */
