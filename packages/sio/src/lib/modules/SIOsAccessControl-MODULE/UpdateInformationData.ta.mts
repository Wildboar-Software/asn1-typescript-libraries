/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs";
import {
    SPIFVersionNumber,
    _decode_SPIFVersionNumber,
    _encode_SPIFVersionNumber,
} from "../SIOsAccessControl-MODULE/SPIFVersionNumber.ta.mjs";

/**
 * @summary UpdateInformationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateInformationData ::= SEQUENCE {
 *   sPIFVersionNumber            SPIFVersionNumber,
 *   creationDate                 GeneralizedTime,
 *   originatorDistinguishedName  Name,
 *   keyIdentifier                OCTET STRING OPTIONAL
 * }
 * ```
 *
 */
export class UpdateInformationData {
    constructor(
        /**
         * @summary `sPIFVersionNumber`.
         * @public
         * @readonly
         */
        readonly sPIFVersionNumber: SPIFVersionNumber,
        /**
         * @summary `creationDate`.
         * @public
         * @readonly
         */
        readonly creationDate: GeneralizedTime,
        /**
         * @summary `originatorDistinguishedName`.
         * @public
         * @readonly
         */
        readonly originatorDistinguishedName: Name,
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a UpdateInformationData
     * @description
     *
     * This takes an `object` and converts it to a `UpdateInformationData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateInformationData`.
     * @returns {UpdateInformationData}
     */
    public static _from_object(
        _o: { [_K in keyof UpdateInformationData]: UpdateInformationData[_K] }
    ): UpdateInformationData {
        return new UpdateInformationData(
            _o.sPIFVersionNumber,
            _o.creationDate,
            _o.originatorDistinguishedName,
            _o.keyIdentifier
        );
    }
}


/**
 * @summary The Leading Root Component Types of UpdateInformationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateInformationData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sPIFVersionNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "creationDate",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "originatorDistinguishedName",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "keyIdentifier",
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of UpdateInformationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateInformationData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UpdateInformationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateInformationData: $.ComponentSpec[] = [];


let _cached_decoder_for_UpdateInformationData: $.ASN1Decoder<UpdateInformationData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UpdateInformationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateInformationData} The decoded data structure.
 */
export function _decode_UpdateInformationData(el: _Element): UpdateInformationData {
    if (!_cached_decoder_for_UpdateInformationData) {
        _cached_decoder_for_UpdateInformationData = function (
            el: _Element
        ): UpdateInformationData {
            let sPIFVersionNumber!: SPIFVersionNumber;
            let creationDate!: GeneralizedTime;
            let originatorDistinguishedName!: Name;
            let keyIdentifier: OPTIONAL<OCTET_STRING>;
            const callbacks: $.DecodingMap = {
                sPIFVersionNumber: (_el: _Element): void => {
                    sPIFVersionNumber = _decode_SPIFVersionNumber(_el);
                },
                creationDate: (_el: _Element): void => {
                    creationDate = $._decodeGeneralizedTime(_el);
                },
                originatorDistinguishedName: (_el: _Element): void => {
                    originatorDistinguishedName = _decode_Name(_el);
                },
                keyIdentifier: (_el: _Element): void => {
                    keyIdentifier = $._decodeOctetString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UpdateInformationData,
                _extension_additions_list_spec_for_UpdateInformationData,
                _root_component_type_list_2_spec_for_UpdateInformationData,
                undefined
            );
            return new UpdateInformationData (
                sPIFVersionNumber,
                creationDate,
                originatorDistinguishedName,
                keyIdentifier
            );
        };
    }
    return _cached_decoder_for_UpdateInformationData(el);
}


let _cached_encoder_for_UpdateInformationData: $.ASN1Encoder<UpdateInformationData> | null = null;


/**
 * @summary Encodes a(n) UpdateInformationData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateInformationData, encoded as an ASN.1 Element.
 */
export function _encode_UpdateInformationData(
    value: UpdateInformationData,
    elGetter: $.ASN1Encoder<UpdateInformationData>
): _Element {
    if (!_cached_encoder_for_UpdateInformationData) {
        _cached_encoder_for_UpdateInformationData = function (
            value: UpdateInformationData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SPIFVersionNumber(
                            value.sPIFVersionNumber,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.creationDate,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Name(
                            value.originatorDistinguishedName,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyIdentifier === undefined
                            ? undefined
                            : $._encodeOctetString(value.keyIdentifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UpdateInformationData(value, elGetter);
}


/* eslint-enable */
