/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PSIDEncryptionAlgorithm,
    _decode_PSIDEncryptionAlgorithm,
    _encode_PSIDEncryptionAlgorithm,
} from "../XBHSM/PSIDEncryptionAlgorithm.ta.mjs";
import {
    EncryptedPsid,
    _decode_EncryptedPsid,
    _encode_EncryptedPsid,
} from "../XBHSM/EncryptedPsid.ta.mjs";

/**
 * @summary DataSetForEncryptedPSID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataSetForEncryptedPSID ::= SEQUENCE {
 *         version     INTEGER DEFAULT 0,
 *         psidEncAlg      PSIDEncryptionAlgorithm,
 *         encryptedPsid     EncryptedPsid
 *         }
 * ```
 *
 * @class
 */
export class DataSetForEncryptedPSID {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<INTEGER>,
        /**
         * @summary `psidEncAlg`.
         * @public
         * @readonly
         */
        readonly psidEncAlg: PSIDEncryptionAlgorithm,
        /**
         * @summary `encryptedPsid`.
         * @public
         * @readonly
         */
        readonly encryptedPsid: EncryptedPsid
    ) {}

    /**
     * @summary Restructures an object into a DataSetForEncryptedPSID
     * @description
     *
     * This takes an `object` and converts it to a `DataSetForEncryptedPSID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataSetForEncryptedPSID`.
     * @returns {DataSetForEncryptedPSID}
     */
    public static _from_object(
        _o: {
            [_K in keyof DataSetForEncryptedPSID]: DataSetForEncryptedPSID[_K];
        }
    ): DataSetForEncryptedPSID {
        return new DataSetForEncryptedPSID(
            _o.version,
            _o.psidEncAlg,
            _o.encryptedPsid
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version(): INTEGER {
        return 0;
    }
}

/**
 * @summary The Leading Root Component Types of DataSetForEncryptedPSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DataSetForEncryptedPSID: $.ComponentSpec[] =
    [
        new $.ComponentSpec("version", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("psidEncAlg", false, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec(
            "encryptedPsid",
            false,
            $.hasTag(_TagClass.context, 2)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of DataSetForEncryptedPSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataSetForEncryptedPSID: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of DataSetForEncryptedPSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataSetForEncryptedPSID: $.ComponentSpec[] =
    [];

let _cached_decoder_for_DataSetForEncryptedPSID: $.ASN1Decoder<DataSetForEncryptedPSID> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataSetForEncryptedPSID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export function _decode_DataSetForEncryptedPSID(
    el: _Element
): DataSetForEncryptedPSID {
    if (!_cached_decoder_for_DataSetForEncryptedPSID) {
        _cached_decoder_for_DataSetForEncryptedPSID = function (
            el: _Element
        ): DataSetForEncryptedPSID {
            let version: OPTIONAL<INTEGER> =
                DataSetForEncryptedPSID._default_value_for_version;
            let psidEncAlg!: PSIDEncryptionAlgorithm;
            let encryptedPsid!: EncryptedPsid;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                psidEncAlg: (_el: _Element): void => {
                    psidEncAlg = $._decode_implicit<PSIDEncryptionAlgorithm>(
                        () => _decode_PSIDEncryptionAlgorithm
                    )(_el);
                },
                encryptedPsid: (_el: _Element): void => {
                    encryptedPsid = $._decode_implicit<EncryptedPsid>(
                        () => _decode_EncryptedPsid
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataSetForEncryptedPSID,
                _extension_additions_list_spec_for_DataSetForEncryptedPSID,
                _root_component_type_list_2_spec_for_DataSetForEncryptedPSID,
                undefined
            );
            return new DataSetForEncryptedPSID(
                version,
                psidEncAlg,
                encryptedPsid
            );
        };
    }
    return _cached_decoder_for_DataSetForEncryptedPSID(el);
}

let _cached_encoder_for_DataSetForEncryptedPSID: $.ASN1Encoder<DataSetForEncryptedPSID> | null =
    null;

/**
 * @summary Encodes a(n) DataSetForEncryptedPSID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataSetForEncryptedPSID, encoded as an ASN.1 Element.
 */
export function _encode_DataSetForEncryptedPSID(
    value: DataSetForEncryptedPSID,
    elGetter: $.ASN1Encoder<DataSetForEncryptedPSID>
): _Element {
    if (!_cached_encoder_for_DataSetForEncryptedPSID) {
        _cached_encoder_for_DataSetForEncryptedPSID = function (
            value: DataSetForEncryptedPSID
        ): _Element {
            return $._encodeSequence(
                (
                    [
                        /* IF_DEFAULT */ value.version === undefined ||
                        $.deepEq(
                            value.version,
                            DataSetForEncryptedPSID._default_value_for_version
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.version, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_PSIDEncryptionAlgorithm,
                            $.BER
                        )(value.psidEncAlg, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_EncryptedPsid,
                            $.BER
                        )(value.encryptedPsid, $.BER),
                    ] as (_Element | undefined)[]
                ).filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DataSetForEncryptedPSID(value, elGetter);
}

/* eslint-enable */
