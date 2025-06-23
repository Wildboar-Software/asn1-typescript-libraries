/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MasterKeyEncryptedHMACkey,
    _decode_MasterKeyEncryptedHMACkey,
    _encode_MasterKeyEncryptedHMACkey,
} from "../CMSDBKeyManagement/MasterKeyEncryptedHMACkey.ta.mjs";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../CMSDBKeyManagement/UniqueIdentifier.ta.mjs";

/**
 * @summary DatabaseServerToKeyManager
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DatabaseServerToKeyManager ::= SEQUENCE {
 * encryptedKey    MasterKeyEncryptedHMACkey,
 * uniqueID        UniqueIdentifier OPTIONAL
 *                 -- May be known system wide --
 * }
 * ```
 *
 * @class
 */
export class DatabaseServerToKeyManager {
    constructor(
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: MasterKeyEncryptedHMACkey,
        /**
         * @summary `uniqueID`.
         * @public
         * @readonly
         */
        readonly uniqueID: OPTIONAL<UniqueIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a DatabaseServerToKeyManager
     * @description
     *
     * This takes an `object` and converts it to a `DatabaseServerToKeyManager`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DatabaseServerToKeyManager`.
     * @returns {DatabaseServerToKeyManager}
     */
    public static _from_object(
        _o: {
            [_K in keyof DatabaseServerToKeyManager]: DatabaseServerToKeyManager[_K];
        }
    ): DatabaseServerToKeyManager {
        return new DatabaseServerToKeyManager(_o.encryptedKey, _o.uniqueID);
    }
}


/**
 * @summary The Leading Root Component Types of DatabaseServerToKeyManager
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DatabaseServerToKeyManager: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "uniqueID",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of DatabaseServerToKeyManager
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DatabaseServerToKeyManager: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DatabaseServerToKeyManager
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DatabaseServerToKeyManager: $.ComponentSpec[] = [];


let _cached_decoder_for_DatabaseServerToKeyManager: $.ASN1Decoder<DatabaseServerToKeyManager> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DatabaseServerToKeyManager
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DatabaseServerToKeyManager} The decoded data structure.
 */
export function _decode_DatabaseServerToKeyManager(el: _Element) {
    if (!_cached_decoder_for_DatabaseServerToKeyManager) {
        _cached_decoder_for_DatabaseServerToKeyManager = function (
            el: _Element
        ): DatabaseServerToKeyManager {
            let encryptedKey!: MasterKeyEncryptedHMACkey;
            let uniqueID: OPTIONAL<UniqueIdentifier>;
            const callbacks: $.DecodingMap = {
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = _decode_MasterKeyEncryptedHMACkey(_el);
                },
                uniqueID: (_el: _Element): void => {
                    uniqueID = _decode_UniqueIdentifier(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DatabaseServerToKeyManager,
                _extension_additions_list_spec_for_DatabaseServerToKeyManager,
                _root_component_type_list_2_spec_for_DatabaseServerToKeyManager,
                undefined
            );
            return new DatabaseServerToKeyManager (
                encryptedKey,
                uniqueID
            );
        };
    }
    return _cached_decoder_for_DatabaseServerToKeyManager(el);
}


let _cached_encoder_for_DatabaseServerToKeyManager: $.ASN1Encoder<DatabaseServerToKeyManager> | null = null;


/**
 * @summary Encodes a(n) DatabaseServerToKeyManager into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DatabaseServerToKeyManager, encoded as an ASN.1 Element.
 */
export function _encode_DatabaseServerToKeyManager(
    value: DatabaseServerToKeyManager,
    elGetter: $.ASN1Encoder<DatabaseServerToKeyManager>
) {
    if (!_cached_encoder_for_DatabaseServerToKeyManager) {
        _cached_encoder_for_DatabaseServerToKeyManager = function (
            value: DatabaseServerToKeyManager        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MasterKeyEncryptedHMACkey(
                            value.encryptedKey,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.uniqueID === undefined
                            ? undefined
                            : _encode_UniqueIdentifier(value.uniqueID, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DatabaseServerToKeyManager(value, elGetter);
}


/* eslint-enable */
