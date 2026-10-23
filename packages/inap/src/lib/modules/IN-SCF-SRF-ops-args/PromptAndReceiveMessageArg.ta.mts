/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SRF-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SRF-datatypes/InformationToSend.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-SSF-SCF-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-SSF-SCF-datatypes/GenericNumber.ta.mjs";
import { MailBoxID, _decode_MailBoxID, _encode_MailBoxID } from "../IN-SCF-SRF-datatypes/MailBoxID.ta.mjs";
// export { MailBoxID, _decode_MailBoxID, _encode_MailBoxID } from "../IN-SCF-SRF-datatypes/MailBoxID.ta.mjs";
import { InformationToRecord, _decode_InformationToRecord, _encode_InformationToRecord } from "../IN-SCF-SRF-datatypes/InformationToRecord.ta.mjs";
// export { InformationToRecord, _decode_InformationToRecord, _encode_InformationToRecord } from "../IN-SCF-SRF-datatypes/InformationToRecord.ta.mjs";
import { Media, Media_voiceMail /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Media, _encode_Media, _enum_for_Media } from "../IN-SCF-SRF-datatypes/Media.ta.mjs";
// export { Media, _enum_for_Media, Media_voiceMail /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceMail /* IMPORTED_SHORT_ENUMERATION_ITEM */, Media_faxGroup3 /* IMPORTED_LONG_ENUMERATION_ITEM */, faxGroup3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, Media_faxGroup4 /* IMPORTED_LONG_ENUMERATION_ITEM */, faxGroup4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Media, _encode_Media } from "../IN-SCF-SRF-datatypes/Media.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary PromptAndReceiveMessageArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptAndReceiveMessageArg ::= SEQUENCE {
 *   disconnectFromIPForbidden  [0]  BOOLEAN DEFAULT TRUE,
 *   informationToSend          [1]  InformationToSend OPTIONAL,
 *   extensions                 [3]  Extensions OPTIONAL,
 *   subscriberID               [4]  GenericNumber OPTIONAL,
 *   mailBoxID                  [5]  MailBoxID OPTIONAL,
 *   informationToRecord        [6]  InformationToRecord,
 *   media                      [7]  Media DEFAULT voiceMail,
 *   callSegmentID              [8]  CallSegmentID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class PromptAndReceiveMessageArg {
    /**
     * @summary `disconnectFromIPForbidden`.
     * @public
     * @readonly
     */
    readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>;
    /**
     * @summary `informationToSend`.
     * @public
     * @readonly
     */
    readonly informationToSend: OPTIONAL<InformationToSend>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `subscriberID`.
     * @public
     * @readonly
     */
    readonly subscriberID: OPTIONAL<GenericNumber>;
    /**
     * @summary `mailBoxID`.
     * @public
     * @readonly
     */
    readonly mailBoxID: OPTIONAL<MailBoxID>;
    /**
     * @summary `informationToRecord`.
     * @public
     * @readonly
     */
    readonly informationToRecord: InformationToRecord;
    /**
     * @summary `media`.
     * @public
     * @readonly
     */
    readonly media: OPTIONAL<Media>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        disconnectFromIPForbidden: OPTIONAL<BOOLEAN>,
        informationToSend: OPTIONAL<InformationToSend>,
        extensions: OPTIONAL<Extensions>,
        subscriberID: OPTIONAL<GenericNumber>,
        mailBoxID: OPTIONAL<MailBoxID>,
        informationToRecord: InformationToRecord,
        media?: OPTIONAL<Media>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.disconnectFromIPForbidden = disconnectFromIPForbidden;
        this.informationToSend = informationToSend;
        this.extensions = extensions;
        this.subscriberID = subscriberID;
        this.mailBoxID = mailBoxID;
        this.informationToRecord = informationToRecord;
        this.media = media;
        this.callSegmentID = callSegmentID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PromptAndReceiveMessageArg
     * @description
     * 
     * This takes an `object` and converts it to a `PromptAndReceiveMessageArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PromptAndReceiveMessageArg`.
     * @returns {PromptAndReceiveMessageArg}
     */
    public static _from_object (_o: { [_K in keyof (PromptAndReceiveMessageArg)]: (PromptAndReceiveMessageArg)[_K] }): PromptAndReceiveMessageArg {
        return new PromptAndReceiveMessageArg(_o.disconnectFromIPForbidden, _o.informationToSend, _o.extensions, _o.subscriberID, _o.mailBoxID, _o.informationToRecord, _o.media, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
    /**
     * @summary Getter that returns the default value for `media`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_media () { return Media_voiceMail; }        /**
         * @summary The enum used as the type of the component `media`
         * @public
         * @static
         */

    public static _enum_for_media = _enum_for_Media;
}

/**
 * @summary The Leading Root Component Types of PromptAndReceiveMessageArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PromptAndReceiveMessageArg: $.ComponentSpec[] = [
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("informationToSend", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subscriberID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mailBoxID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("informationToRecord", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("media", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of PromptAndReceiveMessageArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PromptAndReceiveMessageArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PromptAndReceiveMessageArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PromptAndReceiveMessageArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PromptAndReceiveMessageArg: $.ASN1Decoder<PromptAndReceiveMessageArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptAndReceiveMessageArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptAndReceiveMessageArg (el: _Element): PromptAndReceiveMessageArg {
    if (!_cached_decoder_for_PromptAndReceiveMessageArg) { _cached_decoder_for_PromptAndReceiveMessageArg = function (el: _Element): PromptAndReceiveMessageArg {
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PromptAndReceiveMessageArg._default_value_for_disconnectFromIPForbidden;
    let informationToSend: OPTIONAL<InformationToSend>;
    let extensions: OPTIONAL<Extensions>;
    let subscriberID: OPTIONAL<GenericNumber>;
    let mailBoxID: OPTIONAL<MailBoxID>;
    let informationToRecord!: InformationToRecord;
    let media: OPTIONAL<Media> = PromptAndReceiveMessageArg._default_value_for_media;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "subscriberID": (_el: _Element): void => { subscriberID = $._decode_implicit<GenericNumber>(() => _decode_GenericNumber)(_el); },
        "mailBoxID": (_el: _Element): void => { mailBoxID = $._decode_implicit<MailBoxID>(() => _decode_MailBoxID)(_el); },
        "informationToRecord": (_el: _Element): void => { informationToRecord = $._decode_implicit<InformationToRecord>(() => _decode_InformationToRecord)(_el); },
        "media": (_el: _Element): void => { media = $._decode_implicit<Media>(() => _decode_Media)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PromptAndReceiveMessageArg,
        _extension_additions_list_spec_for_PromptAndReceiveMessageArg,
        _root_component_type_list_2_spec_for_PromptAndReceiveMessageArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PromptAndReceiveMessageArg(
        disconnectFromIPForbidden,
        informationToSend,
        extensions,
        subscriberID,
        mailBoxID,
        informationToRecord,
        media,
        callSegmentID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PromptAndReceiveMessageArg(el);
}

let _cached_encoder_for_PromptAndReceiveMessageArg: $.ASN1Encoder<PromptAndReceiveMessageArg> | null = null;

/**
 * @summary Encodes a(n) PromptAndReceiveMessageArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptAndReceiveMessageArg, encoded as an ASN.1 Element.
 */
export
function _encode_PromptAndReceiveMessageArg (value: PromptAndReceiveMessageArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptAndReceiveMessageArg) { _cached_encoder_for_PromptAndReceiveMessageArg = function (value: PromptAndReceiveMessageArg, elGetter: $.ASN1Encoder<PromptAndReceiveMessageArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.disconnectFromIPForbidden !== undefined && !$.deepEq(value.disconnectFromIPForbidden, PromptAndReceiveMessageArg._default_value_for_disconnectFromIPForbidden)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER);
    }
    if (value.informationToSend !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.subscriberID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_GenericNumber, $.BER)(value.subscriberID, $.BER);
    }
    if (value.mailBoxID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MailBoxID, $.BER)(value.mailBoxID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_InformationToRecord, $.BER)(value.informationToRecord, $.BER);
    if (value.media !== undefined && !$.deepEq(value.media, PromptAndReceiveMessageArg._default_value_for_media)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 7, () => _encode_Media, $.BER)(value.media, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PromptAndReceiveMessageArg(value, elGetter);
}


/* eslint-enable */
