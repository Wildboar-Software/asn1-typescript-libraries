/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserDataHeader, _decode_UserDataHeader, _encode_UserDataHeader } from "../Short-Message-Service-Operations-asn1-97/UserDataHeader.ta.mjs";
import { ShortMessageText, _decode_ShortMessageText, _encode_ShortMessageText } from "../Short-Message-Service-Operations-asn1-97/ShortMessageText.ta.mjs";

/**
 * @summary UserData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserData ::= SEQUENCE {
 *     userDataHeader [0] IMPLICIT UserDataHeader OPTIONAL,
 *     class [1] IMPLICIT INTEGER (0..3) OPTIONAL,
 *     compressed [2] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     shortMessageText ShortMessageText
 * }
 * ```
 * 
 * @class
 */
export
class UserData {
    /**
     * @summary `userDataHeader`.
     * @public
     * @readonly
     */
    readonly userDataHeader: OPTIONAL<UserDataHeader>;
    /**
     * @summary `class_`.
     * @public
     * @readonly
     */
    readonly class_: OPTIONAL<INTEGER>;
    /**
     * @summary `compressed`.
     * @public
     * @readonly
     */
    readonly compressed: OPTIONAL<BOOLEAN>;
    /**
     * @summary `shortMessageText`.
     * @public
     * @readonly
     */
    readonly shortMessageText: ShortMessageText;

    constructor (
        userDataHeader: OPTIONAL<UserDataHeader>,
        class_: OPTIONAL<INTEGER>,
        compressed: OPTIONAL<BOOLEAN>,
        shortMessageText: ShortMessageText
    ) {
        this.userDataHeader = userDataHeader;
        this.class_ = class_;
        this.compressed = compressed;
        this.shortMessageText = shortMessageText;
    
        if (class_ !== undefined && (typeof class_ === "bigint" ? (class_ < 0n || class_ > 3n) : (class_ < 0 || class_ > 3))) {
            throw new ASN1OverflowError("UserData.class_ violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a UserData
     * @description
     * 
     * This takes an `object` and converts it to a `UserData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserData`.
     * @returns {UserData}
     */
    public static _from_object (_o: { [_K in keyof (UserData)]: (UserData)[_K] }): UserData {
        return new UserData(_o.userDataHeader, _o.class_, _o.compressed, _o.shortMessageText);
    }

    /**
     * @summary Getter that returns the default value for `compressed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_compressed () { return false; }
}

/**
 * @summary The Leading Root Component Types of UserData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserData: $.ComponentSpec[] = [
    new $.ComponentSpec("userDataHeader", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("compressed", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("shortMessageText", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of UserData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserData: $.ASN1Decoder<UserData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserData (el: _Element): UserData {
    if (!_cached_decoder_for_UserData) { _cached_decoder_for_UserData = function (el: _Element): UserData {
    let userDataHeader: OPTIONAL<UserDataHeader>;
    let class_: OPTIONAL<INTEGER>;
    let compressed: OPTIONAL<BOOLEAN> = UserData._default_value_for_compressed;
    let shortMessageText!: ShortMessageText;
    const callbacks: $.DecodingMap = {
        "userDataHeader": (_el: _Element): void => { userDataHeader = $._decode_implicit<UserDataHeader>(() => _decode_UserDataHeader)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "compressed": (_el: _Element): void => { compressed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "shortMessageText": (_el: _Element): void => { shortMessageText = _decode_ShortMessageText(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserData,
        _extension_additions_list_spec_for_UserData,
        _root_component_type_list_2_spec_for_UserData,
        undefined,
    );
    return new UserData(
        userDataHeader,
        class_,
        compressed,
        shortMessageText
    );
}; }
    return _cached_decoder_for_UserData(el);
}

let _cached_encoder_for_UserData: $.ASN1Encoder<UserData> | null = null;

/**
 * @summary Encodes a(n) UserData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserData, encoded as an ASN.1 Element.
 */
export
function _encode_UserData (value: UserData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserData) { _cached_encoder_for_UserData = function (value: UserData, elGetter: $.ASN1Encoder<UserData>): _Element {
    const _components: _Element[] = [];
    if (value.userDataHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_UserDataHeader, $.BER)(value.userDataHeader, $.BER));
    }
    if (value.class_ !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.class_, $.BER));
    }
    if (value.compressed !== undefined && !$.deepEq(value.compressed, UserData._default_value_for_compressed)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.compressed, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_ShortMessageText(value.shortMessageText, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UserData(value, elGetter);
}

/* eslint-enable */
