/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { SECURITY_EXCHANGE } from "../Notation/SECURITY-EXCHANGE.oca.mjs";
import { InvocationId, _decode_InvocationId, _encode_InvocationId } from "../SeseAPDUs/InvocationId.ta.mjs";
// export { InvocationId, _decode_InvocationId, _encode_InvocationId } from "../SeseAPDUs/InvocationId.ta.mjs";
import { noInvocationId } from "../SeseAPDUs/noInvocationId.va.mjs";
// export { noInvocationId } from "../SeseAPDUs/noInvocationId.va.mjs";


/**
 * @summary SETransfer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SETransfer{SECURITY-EXCHANGE:ValidSEs, InvocationId:InvocationIdSet} ::= SEQUENCE {
 *   seIdentifier    SECURITY-EXCHANGE.&sE-Identifier({ValidSEs}),
 *   -- This identifies one of the security-
 *   -- exchanges supported by the particular SESE
 *   -- abstract syntax
 *   itemIdentifier
 *     SECURITY-EXCHANGE.&SE-Items.&itemId({ValidSEs}{@seIdentifier}),
 *   -- This identifies one of the security-
 *   -- exchange-items of the security exchange
 *   -- indicated by "seIdentifier"
 *   seItem
 *     SECURITY-EXCHANGE.&SE-Items.&ItemType
 *       ({ValidSEs}{@seIdentifier, @itemIdentifier}),
 *   invocationId
 *     InvocationId(InvocationIdSet)
 *       (CONSTRAINED BY {-- Must be the same as the--
 *       -- invocationId on an active security exchange--
 * 
 *          -- if start flag is not true -- }) DEFAULT noInvocationId,
 *   startFlag       BOOLEAN DEFAULT FALSE,
 *   -- This field is set only as the first security-
 *   -- exchange-item of a security-exchange is
 *   -- transferred.
 *   endFlag         BOOLEAN DEFAULT FALSE -- This field is set as the last security-exchange-
 * -- item of a security-exchange is transferred. It is
 * -- needed to accommodate those mechanisms requiring
 * -- n exchanges, where n is not known a priori
 * }
 * ```
 * 
 * @class
 */
export
class SETransfer {
    /**
     * @summary `seIdentifier`.
     * @public
     * @readonly
     */
    readonly seIdentifier: Identifier;
    /**
     * @summary `itemIdentifier`.
     * @public
     * @readonly
     */
    readonly itemIdentifier: _Element;
    /**
     * @summary `seItem`.
     * @public
     * @readonly
     */
    readonly seItem: _Element;
    /**
     * @summary `invocationId`.
     * @public
     * @readonly
     */
    readonly invocationId: OPTIONAL<InvocationId>;
    /**
     * @summary `startFlag`.
     * @public
     * @readonly
     */
    readonly startFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `endFlag`.
     * @public
     * @readonly
     */
    readonly endFlag: OPTIONAL<BOOLEAN>;

    constructor (
        seIdentifier: Identifier,
        itemIdentifier: _Element,
        seItem: _Element,
        invocationId: OPTIONAL<InvocationId>,
        startFlag: OPTIONAL<BOOLEAN>,
        endFlag: OPTIONAL<BOOLEAN>
    ) {
        this.seIdentifier = seIdentifier;
        this.itemIdentifier = itemIdentifier;
        this.seItem = seItem;
        this.invocationId = invocationId;
        this.startFlag = startFlag;
        this.endFlag = endFlag;
    }

    /**
     * @summary Restructures an object into a SETransfer
     * @description
     * 
     * This takes an `object` and converts it to a `SETransfer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SETransfer`.
     * @returns {SETransfer}
     */
    public static _from_object (_o: { [_K in keyof (SETransfer)]: (SETransfer)[_K] }): SETransfer {
        return new SETransfer(_o.seIdentifier, _o.itemIdentifier, _o.seItem, _o.invocationId, _o.startFlag, _o.endFlag);
    }

    /**
     * @summary Getter that returns the default value for `invocationId`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_invocationId () { return noInvocationId; }
    /**
     * @summary Getter that returns the default value for `startFlag`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startFlag () { return false; }
    /**
     * @summary Getter that returns the default value for `endFlag`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_endFlag () { return false; }
}

/**
 * @summary The Leading Root Component Types of SETransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SETransfer: $.ComponentSpec[] = [
    new $.ComponentSpec("seIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("itemIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("seItem", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("invocationId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startFlag", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("endFlag", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SETransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SETransfer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SETransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SETransfer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SETransfer: $.ASN1Decoder<SETransfer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SETransfer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SETransfer (el: _Element): SETransfer {
    if (!_cached_decoder_for_SETransfer) { _cached_decoder_for_SETransfer = function (el: _Element): SETransfer {
    let seIdentifier!: Identifier;
    let itemIdentifier!: _Element;
    let seItem!: _Element;
    let invocationId: OPTIONAL<InvocationId> = SETransfer._default_value_for_invocationId;
    let startFlag: OPTIONAL<BOOLEAN> = SETransfer._default_value_for_startFlag;
    let endFlag: OPTIONAL<BOOLEAN> = SETransfer._default_value_for_endFlag;
    const callbacks: $.DecodingMap = {
        "seIdentifier": (_el: _Element): void => { seIdentifier = _decode_Identifier(_el); },
        "itemIdentifier": (_el: _Element): void => { itemIdentifier = $._decodeAny(_el); },
        "seItem": (_el: _Element): void => { seItem = $._decodeAny(_el); },
        "invocationId": (_el: _Element): void => { invocationId = _decode_InvocationId(_el); },
        "startFlag": (_el: _Element): void => { startFlag = $._decodeBoolean(_el); },
        "endFlag": (_el: _Element): void => { endFlag = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SETransfer,
        _extension_additions_list_spec_for_SETransfer,
        _root_component_type_list_2_spec_for_SETransfer,
        undefined,
    );
    return new SETransfer(
        seIdentifier,
        itemIdentifier,
        seItem,
        invocationId,
        startFlag,
        endFlag
    );
}; }
    return _cached_decoder_for_SETransfer(el);
}

let _cached_encoder_for_SETransfer: $.ASN1Encoder<SETransfer> | null = null;

/**
 * @summary Encodes a(n) SETransfer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SETransfer, encoded as an ASN.1 Element.
 */
export
function _encode_SETransfer (value: SETransfer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SETransfer) { _cached_encoder_for_SETransfer = function (value: SETransfer, elGetter: $.ASN1Encoder<SETransfer>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.seIdentifier, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.itemIdentifier, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeAny, $.BER)(value.seItem, $.BER));
    if (value.invocationId !== undefined && !$.deepEq(value.invocationId, SETransfer._default_value_for_invocationId)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => _encode_InvocationId, $.BER)(value.invocationId, $.BER));
    }
    if (value.startFlag !== undefined && !$.deepEq(value.startFlag, SETransfer._default_value_for_startFlag)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.startFlag, $.BER));
    }
    if (value.endFlag !== undefined && !$.deepEq(value.endFlag, SETransfer._default_value_for_endFlag)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.endFlag, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SETransfer(value, elGetter);
}


/* eslint-enable */
