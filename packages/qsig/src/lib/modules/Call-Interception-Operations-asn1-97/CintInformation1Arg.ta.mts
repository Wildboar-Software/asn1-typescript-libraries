/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CintCause, _decode_CintCause, _encode_CintCause } from "../Call-Interception-Operations-asn1-97/CintCause.ta.mjs";
// export { CintCause, CintCause_unknown /* IMPORTED_LONG_NAMED_INTEGER */, unknown /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintBnan /* IMPORTED_LONG_NAMED_INTEGER */, cintBnan /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintBus /* IMPORTED_LONG_NAMED_INTEGER */, cintBus /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintCug /* IMPORTED_LONG_NAMED_INTEGER */, cintCug /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintDnd /* IMPORTED_LONG_NAMED_INTEGER */, cintDnd /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintIbd /* IMPORTED_LONG_NAMED_INTEGER */, cintIbd /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintInn /* IMPORTED_LONG_NAMED_INTEGER */, cintInn /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintMob1 /* IMPORTED_LONG_NAMED_INTEGER */, cintMob1 /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintMob2 /* IMPORTED_LONG_NAMED_INTEGER */, cintMob2 /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintMob3 /* IMPORTED_LONG_NAMED_INTEGER */, cintMob3 /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintNcmp /* IMPORTED_LONG_NAMED_INTEGER */, cintNcmp /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintNcong /* IMPORTED_LONG_NAMED_INTEGER */, cintNcong /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintNre /* IMPORTED_LONG_NAMED_INTEGER */, cintNre /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintOos /* IMPORTED_LONG_NAMED_INTEGER */, cintOos /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintRrs /* IMPORTED_LONG_NAMED_INTEGER */, cintRrs /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintTbnan /* IMPORTED_LONG_NAMED_INTEGER */, cintTbnan /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintTnre /* IMPORTED_LONG_NAMED_INTEGER */, cintTnre /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintTrans /* IMPORTED_LONG_NAMED_INTEGER */, cintTrans /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintUpl /* IMPORTED_LONG_NAMED_INTEGER */, cintUpl /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintInvDiv /* IMPORTED_LONG_NAMED_INTEGER */, cintInvDiv /* IMPORTED_SHORT_NAMED_INTEGER */, CintCause_cintHold /* IMPORTED_LONG_NAMED_INTEGER */, cintHold /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CintCause, _encode_CintCause } from "../Call-Interception-Operations-asn1-97/CintCause.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";
// export { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";


/**
 * @summary CintInformation1Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CintInformation1Arg ::= SEQUENCE {
 *     interceptionCause CintCause,
 *     interceptedToNumber PartyNumber,
 *     extension CintExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CintInformation1Arg {
    /**
     * @summary `interceptionCause`.
     * @public
     * @readonly
     */
    readonly interceptionCause: CintCause;
    /**
     * @summary `interceptedToNumber`.
     * @public
     * @readonly
     */
    readonly interceptedToNumber: PartyNumber;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<CintExtension>;

    constructor (
        interceptionCause: CintCause,
        interceptedToNumber: PartyNumber,
        extension: OPTIONAL<CintExtension>
    ) {
        this.interceptionCause = interceptionCause;
        this.interceptedToNumber = interceptedToNumber;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CintInformation1Arg
     * @description
     * 
     * This takes an `object` and converts it to a `CintInformation1Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CintInformation1Arg`.
     * @returns {CintInformation1Arg}
     */
    public static _from_object (_o: { [_K in keyof (CintInformation1Arg)]: (CintInformation1Arg)[_K] }): CintInformation1Arg {
        return new CintInformation1Arg(_o.interceptionCause, _o.interceptedToNumber, _o.extension);
    }


}

/**
 * @summary The Leading Root Component Types of CintInformation1Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CintInformation1Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("interceptionCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("interceptedToNumber", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of CintInformation1Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CintInformation1Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CintInformation1Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CintInformation1Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CintInformation1Arg: $.ASN1Decoder<CintInformation1Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CintInformation1Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CintInformation1Arg (el: _Element): CintInformation1Arg {
    if (!_cached_decoder_for_CintInformation1Arg) { _cached_decoder_for_CintInformation1Arg = function (el: _Element): CintInformation1Arg {
    let interceptionCause!: CintCause;
    let interceptedToNumber!: PartyNumber;
    let extension: OPTIONAL<CintExtension>;
    const callbacks: $.DecodingMap = {
        "interceptionCause": (_el: _Element): void => { interceptionCause = _decode_CintCause(_el); },
        "interceptedToNumber": (_el: _Element): void => { interceptedToNumber = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CintExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CintInformation1Arg,
        _extension_additions_list_spec_for_CintInformation1Arg,
        _root_component_type_list_2_spec_for_CintInformation1Arg,
        undefined,
    );
    return new CintInformation1Arg(
        interceptionCause,
        interceptedToNumber,
        extension
    );
}; }
    return _cached_decoder_for_CintInformation1Arg(el);
}

let _cached_encoder_for_CintInformation1Arg: $.ASN1Encoder<CintInformation1Arg> | null = null;

/**
 * @summary Encodes a(n) CintInformation1Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CintInformation1Arg, encoded as an ASN.1 Element.
 */
export
function _encode_CintInformation1Arg (value: CintInformation1Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CintInformation1Arg) { _cached_encoder_for_CintInformation1Arg = function (value: CintInformation1Arg, elGetter: $.ASN1Encoder<CintInformation1Arg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CintCause(value.interceptionCause, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.interceptedToNumber, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CintExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CintInformation1Arg(value, elGetter);
}


/* eslint-enable */
