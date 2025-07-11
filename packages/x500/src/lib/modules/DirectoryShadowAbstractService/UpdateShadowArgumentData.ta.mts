/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    AgreementID,
    _decode_AgreementID,
    _encode_AgreementID,
} from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
import {
    RefreshInformation,
    _decode_RefreshInformation,
    _encode_RefreshInformation,
} from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DirectoryShadowAbstractService/Time.ta.mjs";
import {
    UpdateWindow,
    _decode_UpdateWindow,
    _encode_UpdateWindow,
} from "../DirectoryShadowAbstractService/UpdateWindow.ta.mjs";
/**
 * @summary UpdateShadowArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   updateTime          Time,
 *   updateWindow        UpdateWindow OPTIONAL,
 *   updatedInfo         RefreshInformation,
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 */
export class UpdateShadowArgumentData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `updateTime`.
         * @public
         * @readonly
         */
        readonly updateTime: Time,
        /**
         * @summary `updateWindow`.
         * @public
         * @readonly
         */
        readonly updateWindow: OPTIONAL<UpdateWindow>,
        /**
         * @summary `updatedInfo`.
         * @public
         * @readonly
         */
        readonly updatedInfo: RefreshInformation,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateShadowArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `UpdateShadowArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateShadowArgumentData`.
     * @returns {UpdateShadowArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof UpdateShadowArgumentData]: UpdateShadowArgumentData[_K];
            }
        >
    ): UpdateShadowArgumentData {
        return new UpdateShadowArgumentData(
            _o.agreementID,
            _o.updateTime,
            _o.updateWindow,
            _o.updatedInfo,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of UpdateShadowArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateShadowArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "updateTime",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "updateWindow",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "updatedInfo",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of UpdateShadowArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateShadowArgumentData: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UpdateShadowArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateShadowArgumentData: $.ComponentSpec[] = [];

let _cached_decoder_for_UpdateShadowArgumentData: $.ASN1Decoder<UpdateShadowArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowArgumentData} The decoded data structure.
 */
export function _decode_UpdateShadowArgumentData(el: _Element): UpdateShadowArgumentData {
    if (!_cached_decoder_for_UpdateShadowArgumentData) {
        _cached_decoder_for_UpdateShadowArgumentData = $._decode_implicit<UpdateShadowArgumentData>(
            () =>
                function (el: _Element): UpdateShadowArgumentData {
                    let agreementID!: AgreementID;
                    let updateTime!: Time;
                    let updateWindow: OPTIONAL<UpdateWindow>;
                    let updatedInfo!: RefreshInformation;
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        updateTime: (_el: _Element): void => {
                            updateTime = _decode_Time(_el);
                        },
                        updateWindow: (_el: _Element): void => {
                            updateWindow = _decode_UpdateWindow(_el);
                        },
                        updatedInfo: (_el: _Element): void => {
                            updatedInfo = _decode_RefreshInformation(_el);
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_UpdateShadowArgumentData,
                        _extension_additions_list_spec_for_UpdateShadowArgumentData,
                        _root_component_type_list_2_spec_for_UpdateShadowArgumentData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new UpdateShadowArgumentData(
                        agreementID,
                        updateTime,
                        updateWindow,
                        updatedInfo,
                        securityParameters,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_UpdateShadowArgumentData(el);
}

let _cached_encoder_for_UpdateShadowArgumentData: $.ASN1Encoder<UpdateShadowArgumentData> | null = null;

/**
 * @summary Encodes a(n) UpdateShadowArgumentData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowArgumentData(
    value: UpdateShadowArgumentData,
    elGetter: $.ASN1Encoder<UpdateShadowArgumentData>
): _Element {
    if (!_cached_encoder_for_UpdateShadowArgumentData) {
        _cached_encoder_for_UpdateShadowArgumentData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: UpdateShadowArgumentData                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.DER
                                    ),
                                    /* REQUIRED   */ _encode_Time(
                                        value.updateTime,
                                        $.DER
                                    ),
                                    /* IF_ABSENT  */ value.updateWindow ===
                                    undefined
                                        ? undefined
                                        : _encode_UpdateWindow(
                                              value.updateWindow,
                                              $.DER
                                          ),
                                    /* REQUIRED   */ _encode_RefreshInformation(
                                        value.updatedInfo,
                                        $.DER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              $.DER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.DER
                    );
                },
            $.DER
        );
    }
    return _cached_encoder_for_UpdateShadowArgumentData(value, elGetter);
}


/* eslint-enable */
