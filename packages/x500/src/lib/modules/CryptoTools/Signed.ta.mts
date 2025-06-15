/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Signed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signed{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned   ToBeSigned,
 *   signature    BIT STRING,
 *   altSignature BIT STRING OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Signed<ToBeSigned> {
    constructor(
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary `altSignature`.
         * @public
         * @readonly
         */
        readonly altSignature: OPTIONAL<BIT_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Signed
     * @description
     *
     * This takes an `object` and converts it to a `Signed`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signed`.
     * @returns {Signed}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Signed<any>]: Signed<any>[_K] }>
    ): Signed<any> {
        return new Signed(
            _o.toBeSigned,
            _o.signature,
            _o.altSignature,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of Signed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Signed: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altSignature",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of Signed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Signed: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Signed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Signed: $.ComponentSpec[] = [];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) Signed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_Signed<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return function (el: _Element): Signed<ToBeSigned> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeSigned!: ToBeSigned;
        let signature!: BIT_STRING;
        let altSignature: OPTIONAL<BIT_STRING>;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeSigned: (_el: _Element): void => {
                toBeSigned = _decode_ToBeSigned(_el);
            },
            signature: (_el: _Element): void => {
                signature = $._decodeBitString(_el);
            },
            altSignature: (_el: _Element): void => {
                altSignature = $._decodeBitString(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Signed,
            _extension_additions_list_spec_for_Signed,
            _root_component_type_list_2_spec_for_Signed,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new Signed(
            /* SEQUENCE_CONSTRUCTOR_CALL */ toBeSigned,
            signature,
            altSignature,
            _unrecognizedExtensionsList
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) Signed into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) Signed as an ASN.1 element.
 */
export function _get_encoder_for_Signed<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: Signed<ToBeSigned>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.altSignature === undefined
                            ? undefined
                            : $._encodeBitString(value.altSignature, $.DER),
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

/* eslint-enable */
