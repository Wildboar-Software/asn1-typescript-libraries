/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EntityIdentifier,
    _decode_EntityIdentifier,
    _encode_EntityIdentifier,
} from "../ExtendedSecurityServices-2006/EntityIdentifier.ta.mjs";
import {
    MLReceiptPolicy,
    _decode_MLReceiptPolicy,
    _encode_MLReceiptPolicy,
} from "../ExtendedSecurityServices-2006/MLReceiptPolicy.ta.mjs";

/**
 * @summary MLData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MLData ::= SEQUENCE {
 *     mailListIdentifier EntityIdentifier,
 *     expansionTime GeneralizedTime,
 *     mlReceiptPolicy MLReceiptPolicy OPTIONAL
 * }
 * ```
 *
 */
export class MLData {
    constructor(
        /**
         * @summary `mailListIdentifier`.
         * @public
         * @readonly
         */
        readonly mailListIdentifier: EntityIdentifier,
        /**
         * @summary `expansionTime`.
         * @public
         * @readonly
         */
        readonly expansionTime: GeneralizedTime,
        /**
         * @summary `mlReceiptPolicy`.
         * @public
         * @readonly
         */
        readonly mlReceiptPolicy: OPTIONAL<MLReceiptPolicy>
    ) {}

    /**
     * @summary Restructures an object into a MLData
     * @description
     *
     * This takes an `object` and converts it to a `MLData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MLData`.
     * @returns {MLData}
     */
    public static _from_object(
        _o: { [_K in keyof MLData]: MLData[_K] }
    ): MLData {
        return new MLData(
            _o.mailListIdentifier,
            _o.expansionTime,
            _o.mlReceiptPolicy
        );
    }
}


/**
 * @summary The Leading Root Component Types of MLData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MLData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mailListIdentifier",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "expansionTime",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "mlReceiptPolicy",
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of MLData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MLData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of MLData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MLData: $.ComponentSpec[] = [];


let _cached_decoder_for_MLData: $.ASN1Decoder<MLData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MLData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MLData} The decoded data structure.
 */
export function _decode_MLData(el: _Element): MLData {
    if (!_cached_decoder_for_MLData) {
        _cached_decoder_for_MLData = function (el: _Element): MLData {
            let mailListIdentifier!: EntityIdentifier;
            let expansionTime!: GeneralizedTime;
            let mlReceiptPolicy: OPTIONAL<MLReceiptPolicy>;
            const callbacks: $.DecodingMap = {
                mailListIdentifier: (_el: _Element): void => {
                    mailListIdentifier = _decode_EntityIdentifier(_el);
                },
                expansionTime: (_el: _Element): void => {
                    expansionTime = $._decodeGeneralizedTime(_el);
                },
                mlReceiptPolicy: (_el: _Element): void => {
                    mlReceiptPolicy = _decode_MLReceiptPolicy(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MLData,
                _extension_additions_list_spec_for_MLData,
                _root_component_type_list_2_spec_for_MLData,
                undefined
            );
            return new MLData(
                mailListIdentifier,
                expansionTime,
                mlReceiptPolicy
            );
        };
    }
    return _cached_decoder_for_MLData(el);
}


let _cached_encoder_for_MLData: $.ASN1Encoder<MLData> | null = null;


/**
 * @summary Encodes a(n) MLData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MLData, encoded as an ASN.1 Element.
 */
export function _encode_MLData(value: MLData, elGetter: $.ASN1Encoder<MLData>): _Element {
    if (!_cached_encoder_for_MLData) {
        _cached_encoder_for_MLData = function (
            value: MLData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EntityIdentifier(
                            value.mailListIdentifier,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.expansionTime,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.mlReceiptPolicy === undefined
                            ? undefined
                            : _encode_MLReceiptPolicy(
                                  value.mlReceiptPolicy,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_MLData(value, elGetter);
}


/* eslint-enable */
