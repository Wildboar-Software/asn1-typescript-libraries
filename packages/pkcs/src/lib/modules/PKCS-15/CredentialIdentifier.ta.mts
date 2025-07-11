/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CredentialIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CredentialIdentifier {KEY-IDENTIFIER : IdentifierSet} ::= SEQUENCE {
 *     idType  KEY-IDENTIFIER.&id ({IdentifierSet}),
 *     idValue KEY-IDENTIFIER.&Value ({IdentifierSet}{@idType})
 * }
 * ```
 *
 */
export class CredentialIdentifier {
    constructor(
        /**
         * @summary `idType`.
         * @public
         * @readonly
         */
        readonly idType: INTEGER,
        /**
         * @summary `idValue`.
         * @public
         * @readonly
         */
        readonly idValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a CredentialIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `CredentialIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CredentialIdentifier`.
     * @returns {CredentialIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof CredentialIdentifier]: CredentialIdentifier[_K] }
    ): CredentialIdentifier {
        return new CredentialIdentifier(_o.idType, _o.idValue);
    }
}


/**
 * @summary The Leading Root Component Types of CredentialIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CredentialIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "idType",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("idValue", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of CredentialIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CredentialIdentifier: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CredentialIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CredentialIdentifier: $.ComponentSpec[] = [];


let _cached_decoder_for_CredentialIdentifier: $.ASN1Decoder<CredentialIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CredentialIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CredentialIdentifier} The decoded data structure.
 */
export function _decode_CredentialIdentifier(el: _Element): CredentialIdentifier {
    if (!_cached_decoder_for_CredentialIdentifier) {
        _cached_decoder_for_CredentialIdentifier = function (
            el: _Element
        ): CredentialIdentifier {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CredentialIdentifier contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "idType";
            sequence[1].name = "idValue";
            let idType!: INTEGER;
            let idValue!: _Element;
            idType = $._decodeInteger(sequence[0]);
            idValue = $._decodeAny(sequence[1]);
            return new CredentialIdentifier(idType, idValue);
        };
    }
    return _cached_decoder_for_CredentialIdentifier(el);
}


let _cached_encoder_for_CredentialIdentifier: $.ASN1Encoder<CredentialIdentifier> | null = null;


/**
 * @summary Encodes a(n) CredentialIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CredentialIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_CredentialIdentifier(
    value: CredentialIdentifier,
    elGetter: $.ASN1Encoder<CredentialIdentifier>
): _Element {
    if (!_cached_encoder_for_CredentialIdentifier) {
        _cached_encoder_for_CredentialIdentifier = function (
            value: CredentialIdentifier        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.idType, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.idValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CredentialIdentifier(value, elGetter);
}


/* eslint-enable */
